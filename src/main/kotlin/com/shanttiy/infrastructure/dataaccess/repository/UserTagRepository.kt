package com.shanttiy.infrastructure.dataaccess.repository

import com.shanttiy.domain.model.UserTag
import com.shanttiy.infrastructure.dataaccess.objectmapper.UserTagObjectMapper
import com.shanttiy.infrastructure.database.dao.UserTagDao
import com.shanttiy.usecase.infrastructureboundary.UserTagInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository

@Repository
class UserTagRepository (
    @Autowired
    private val userTagDao: UserTagDao,
    @Autowired
    private val userTagObjectMapper: UserTagObjectMapper
): UserTagInfrastructureBoundary{
    override fun selectUserTagsByTagId(tagId: Int): List<UserTag> {
        val userTags = userTagDao.selectByTagId(tagId)
        return userTags.map { entity -> userTagObjectMapper.mapEntityToDomain(entity) }
    }

    override fun selectUserTagsByUserId(userId: Int): List<UserTag> {
        val userTags = userTagDao.selectByUserId(userId)
        return userTags.map { entity -> userTagObjectMapper.mapEntityToDomain(entity) }
    }

    override fun insertUserTag(userTag: UserTag): UserTag {
        val userTagEntity = userTagDao.insert(userTagObjectMapper.mapDomainToEntity(userTag)).entity
        return userTagObjectMapper.mapEntityToDomain(userTagEntity)
    }

    override fun deleteUserTag(userTag: UserTag): UserTag {
        val userTagEntity = userTagDao.delete(userTagObjectMapper.mapDomainToEntity(userTag)).entity
        return userTagObjectMapper.mapEntityToDomain(userTagEntity)
    }
}