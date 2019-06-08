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

    override fun selectTagById(tagId: Int): Tag? {
        val tagEntity = tagDao.selectById(tagId)
        if (tagEntity != null) return tagObjectMapper.mapEntityToDomain(tagEntity) else return null
    }

    override fun insertTag(tag: Tag): Tag {
        val tagEntity = tagDao.insert(tagObjectMapper.mapDomainToEntity(tag)).entity
        return tagObjectMapper.mapEntityToDomain(tagEntity)
    }

    override fun updateTag(tag: Tag): Tag {
        val tagEntity = tagDao.update(tagObjectMapper.mapDomainToEntity(tag)).entity
        return tagObjectMapper.mapEntityToDomain(tagEntity)
    }

    override fun deleteTag(tag: Tag): Tag {
        val tagEntity = tagDao.delete(tagObjectMapper.mapDomainToEntity(tag)).entity
        return tagObjectMapper.mapEntityToDomain(tagEntity)
    }
}