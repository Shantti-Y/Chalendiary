package com.shanttiy.infrastructure.dataaccess.repository

import com.shanttiy.domain.model.Team
import com.shanttiy.framework.database.dao.TeamDomaDao
import com.shanttiy.infrastructure.dataaccess.entitymappertodomain.TeamEntityMapperToDomain
import com.shanttiy.usecase.infrastructureboundary.TeamInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository

@Repository
class TeamRepository(
    @Autowired
    private val teamDomaDao: TeamDomaDao,
    @Autowired
    private val teamEntityMapperToDomain: TeamEntityMapperToDomain

): TeamInfrastructureBoundary{
    override fun selectTeamById(teamId: Int): Team {
        val teamEntity = teamDomaDao.selectTeamById(teamId)
        return teamEntityMapperToDomain.mapEntityToDomain(teamEntity)
    }

    override fun selectTeamByDomain(teamDomain: String): Team {
        val teamEntity = teamDomaDao.selectTeamByDomain(teamDomain)
        return teamEntityMapperToDomain.mapEntityToDomain(teamEntity)
    }

    override fun selectTeamsByUserId(userId: Int): List<Team> {
        val teamEntities = teamDomaDao.selectTeamsByUserId(userId)
        return teamEntities.map { teamEntity ->
            teamEntityMapperToDomain.mapEntityToDomain(teamEntity)
        }
    }

    override fun selectTeamByTagId(tagId: Int): Team {
        val teamEntity = teamDomaDao.selectTeamByTagId(tagId)
        return teamEntityMapperToDomain.mapEntityToDomain((teamEntity))
    }
}