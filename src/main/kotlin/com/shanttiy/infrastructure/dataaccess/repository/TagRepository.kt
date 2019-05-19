package com.shanttiy.infrastructure.dataaccess.repository

import com.shanttiy.domain.model.Tag
import com.shanttiy.framework.database.dao.TagDomaDao
import com.shanttiy.infrastructure.dataaccess.entitymappertodomain.TagEntityMapperToDomain
import com.shanttiy.usecase.infrastructureboundary.TagInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository

@Repository
class TagRepository(
    @Autowired
    private val tagDomaDao: TagDomaDao,
    @Autowired
    private val tagEntityMapperToDomain: TagEntityMapperToDomain
): TagInfrastructureBoundary{
    override fun selectTagsByTeamId(teamId: Int): List<Tag> {
        val tagEntities = tagDomaDao.selectTagsByTeamId(teamId)
        return tagEntities.map { tagEntity ->
            tagEntityMapperToDomain.mapEntityToDomain(tagEntity)
        }
    }

    override fun selectTagsByUserId(userId: Int): List<Tag> {
        val tagEntities = tagDomaDao.selectTagsByUserId(userId)
        return tagEntities.map { tagEntity ->
            tagEntityMapperToDomain.mapEntityToDomain(tagEntity)
        }
    }
}