package com.shanttiy.usecase.interactor

import com.shanttiy.application.usecaseboundary.TeamUsecaseBoundary
import com.shanttiy.domain.model.Team
import com.shanttiy.domain.model.User
import com.shanttiy.usecase.exception.AccessForbiddenException
import com.shanttiy.usecase.infrastructureboundary.TeamInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.security.InvalidParameterException

@Service
class TeamInteractor(
    @Autowired
    private val teamInfrastructureBoundary: TeamInfrastructureBoundary
): TeamUsecaseBoundary{
    override fun getTeamById(teamId: Int?): Team {
        if (teamId === null) throw InvalidParameterException()
        return teamInfrastructureBoundary.selectTeamById(teamId)
    }

    override fun getTeamByDomain(teamDomain: String): Team {
        return teamInfrastructureBoundary.selectTeamByDomain(teamDomain)
    }

    override fun getTeamsByUserId(userId: Int?): List<Team> {
        if (userId === null) throw InvalidParameterException()
        return teamInfrastructureBoundary.selectTeamsByUserId(userId)
    }

    override fun getTeamByTagId(tagId: Int?): Team {
        if (tagId === null) throw InvalidParameterException()
        return teamInfrastructureBoundary.selectTeamByTagId(tagId)
    }
}