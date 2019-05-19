package com.shanttiy.infrastructure.dataaccess.entitymappertodomain

import com.shanttiy.domain.model.Team
import com.shanttiy.framework.database.dao.TagDomaDao
import com.shanttiy.framework.database.dao.UserDomaDao
import com.shanttiy.framework.database.entity.TeamDomaEntity
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class TeamEntityMapperToDomain(
){
    fun mapEntityToDomain(teamEntity: TeamDomaEntity): Team {
        return Team(
            id = teamEntity.id,
            name = teamEntity.name,
            domain = teamEntity.domain,
            thumbnailPath = teamEntity.thumbnailPath,
            description = teamEntity.description,
            createdAt = teamEntity.createdAt?.toLocalDateTime(),
            updatedAt = teamEntity.updatedAt?.toLocalDateTime()
        )
    }
}