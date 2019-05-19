package com.shanttiy.application.responsedata.propertydata

import com.shanttiy.application.usecaseboundary.TeamUsecaseBoundary
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import com.shanttiy.domain.model.Tag
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.time.LocalDateTime

data class FullTagPropertydata(
    val id: Int?,
    val name: String,
    val team: SimplifiedTeamPropertydata,
    val ownerUser: SimplifiedUserPropertydata,
    val description: String,
    val publicFlag: Boolean,
    val createdAt: LocalDateTime?,
    val updatedAt: LocalDateTime?,
    val users: List<SimplifiedUserPropertydata>
)

@Component
class FullTagPropertydataFactory(
    @Autowired
    private val userUsecaseBoundary: UserUsecaseBoundary,
    @Autowired
    private val simplifiedUserPropertydataFactory: SimplifiedUserPropertydataFactory,
    @Autowired
    private val teamUsecaseBoundary: TeamUsecaseBoundary,
    @Autowired
    private val simplifiedTeamPropertydataFactory: SimplifiedTeamPropertydataFactory
){
    fun construct(tag: Tag): FullTagPropertydata{
        val team = teamUsecaseBoundary.getTeamByTagId(tag.teamId)
        val users = userUsecaseBoundary.getUsersByTagId(tag.id)
        val ownerUser = users.find { it.id === tag.ownerUserId }!!
        return FullTagPropertydata(
            id = tag.id,
            name = tag.name,
            team = simplifiedTeamPropertydataFactory.construct(team),
            ownerUser = simplifiedUserPropertydataFactory.construct(ownerUser),
            description = tag.description,
            publicFlag = tag.publicFlag,
            createdAt = tag.createdAt,
            updatedAt = tag.updatedAt,
            users = users.map { simplifiedUserPropertydataFactory.construct(it) }
        )
    }
}