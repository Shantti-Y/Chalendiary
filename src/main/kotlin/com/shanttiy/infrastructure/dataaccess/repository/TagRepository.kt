package com.shanttiy.infrastructure.dataaccess.repository

import com.shanttiy.domain.model.Tag
import com.shanttiy.infrastructure.dataaccess.objectmapper.TagObjectMapper
import com.shanttiy.infrastructure.database.dao.TagDao
import com.shanttiy.usecase.infrastructureboundary.TagInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository

@Repository
class TagRepository(
    @Autowired
    private val tagDao: TagDao,
    @Autowired
    private val tagObjectMapper: TagObjectMapper
): TagInfrastructureBoundary{
    override fun selectTagsByUserId(userId: Int): List<Tag> {
        val tagEntities = tagDao.selectByUserId(userId)
        return tagEntities.map { entity -> tagObjectMapper.mapEntityToDomain(entity) }
    }
}