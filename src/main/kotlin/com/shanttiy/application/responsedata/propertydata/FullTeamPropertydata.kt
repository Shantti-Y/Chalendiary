package com.shanttiy.application.responsedata.propertydata

import com.shanttiy.application.usecaseboundary.TagUsecaseBoundary
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import com.shanttiy.domain.model.Team
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.time.LocalDateTime

data class FullTeamPropertydata(
    val id: Int?,
    val name: String,
    val domain: String,
    val thumbnailPath: String,
    val description: String,
    val createdAt: LocalDateTime?,
    val updatedAt: LocalDateTime?,
    val users: List<SimplifiedUserPropertydata>,
    val tags: List<SimplifiedTagPropertydata>
)

@Component
class FullTeamPropertydataFactory(
    @Autowired
    private val userUsecaseBoundary: UserUsecaseBoundary,
    @Autowired
    private val simplifiedUserPropertydataFactory: SimplifiedUserPropertydataFactory,
    @Autowired
    private val tagUsecaseBoundary: TagUsecaseBoundary,
    @Autowired
    private val simplifiedTagPropertydataFactory: SimplifiedTagPropertydataFactory
){
    fun construct(team: Team): FullTeamPropertydata{
        val users = userUsecaseBoundary.getUsersByTeamId(team.id)
        val tags = tagUsecaseBoundary.getTagsByTeamId(team.id)
        return FullTeamPropertydata(
            id = team.id,
            name = team.name,
            domain = team.domain,
            thumbnailPath = team.thumbnailPath,
            description = team.description,
            createdAt = team.createdAt,
            updatedAt = team.updatedAt,
            users = users.map { simplifiedUserPropertydataFactory.construct(it) },
            tags = tags.map { simplifiedTagPropertydataFactory.construct(it) }
        )
    }
}