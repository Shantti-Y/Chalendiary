package com.shanttiy.usecase.infrastructureboundary

import com.shanttiy.domain.model.Team

interface TeamInfrastructureBoundary {
    fun selectTeamById(teamId: Int): Team

    fun selectTeamByDomain(teamDomain: String): Team

    fun selectTeamsByUserId(userId: Int): List<Team>

    fun selectTeamByTagId(tagId: Int): Team
}