package com.shanttiy.application.usecaseboundary

import com.shanttiy.domain.model.Team
import com.shanttiy.domain.model.User

interface TeamUsecaseBoundary {
    fun getTeamById(teamId: Int?): Team

    fun getTeamByDomain(teamDomain: String): Team

    fun getTeamsByUserId(userId: Int?): List<Team>

    fun getTeamByTagId(tagId: Int?): Team
}