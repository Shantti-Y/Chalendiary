package com.shanttiy.application.responsedata.propertydata

import com.shanttiy.application.usecaseboundary.TagUsecaseBoundary
import com.shanttiy.application.usecaseboundary.TeamUsecaseBoundary
import com.shanttiy.domain.model.User
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.time.LocalDateTime

data class FullUserPropertydata(
    val id: Int?,
    val screenName: String,
    val email: String,
    val thumbnailPath: String,
    val phone: String?,
    val uniqueId: String,
    val createdAt: LocalDateTime?,
    val updatedAt: LocalDateTime?,
    val teams: List<SimplifiedTeamPropertydata>,
    val tags: List<SimplifiedTagPropertydata>
)

@Component
class FullUserPropertydataFactory(
    @Autowired
    private val tagUsecaseBoundary: TagUsecaseBoundary,
    @Autowired
    private val teamUsecaseBoundary: TeamUsecaseBoundary,
    @Autowired
    private val simplifiedTagPropertydataFactory: SimplifiedTagPropertydataFactory,
    @Autowired
    private val simplifiedTeamPropertydataFactory: SimplifiedTeamPropertydataFactory
){
    fun construct(user: User): FullUserPropertydata{
        val teams = teamUsecaseBoundary.getTeamsByUserId(user.id)
        val tags = tagUsecaseBoundary.getTagsByUserId(user.id)

        return FullUserPropertydata(
            id = user.id,
            screenName = user.screenName,
            email = user.email,
            thumbnailPath = user.thumbnailPath,
            phone = user.phone,
            uniqueId = user.uniqueId,
            createdAt = user.createdAt,
            updatedAt = user.updatedAt,
            teams = teams.map { simplifiedTeamPropertydataFactory.construct(it) },
            tags = tags.map { simplifiedTagPropertydataFactory.construct(it) }
        )
    }
}