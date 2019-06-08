package com.shanttiy.infrastructure.dataaccess.repository

import com.shanttiy.domain.model.User
import com.shanttiy.infrastructure.dataaccess.objectmapper.UserObjectMapper
import com.shanttiy.infrastructure.database.dao.UserDao
import com.shanttiy.usecase.infrastructureboundary.UserInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository

@Repository
class UserRepository(
    @Autowired
    private val userDao: UserDao,
    @Autowired
    private val userObjectMapper: UserObjectMapper
): UserInfrastructureBoundary{
    override fun selectAllUsers(): List<User> {
        val userEntities = userDao.selectAll()
        return userEntities.map { entity -> userObjectMapper.mapEntityToDomain(entity) }
    }

    override fun selectUserById(userId: Int): User? {
        val userEntity = userDao.selectById(userId)
        if(userEntity != null) return userObjectMapper.mapEntityToDomain(userEntity) else return null
    }

    override fun selectUserByUniqueId(uniqueId: String): User? {
        val userEntity = userDao.selectByUniqueId(uniqueId)
        if(userEntity != null) return userObjectMapper.mapEntityToDomain(userEntity) else return null
    }

    override fun selectUserByTagId(tagId: Int): List<User> {
        val userEntities = userDao.selectByTagId(tagId)
        return userEntities.map { entity -> userObjectMapper.mapEntityToDomain(entity) }
    }

    override fun updateUser(user: User): User {
        val userEntity = userDao.update(userObjectMapper.mapDomainToEntity(user)).entity
        return userObjectMapper.mapEntityToDomain(userEntity)
    }

    override fun deleteUser(user: User): User {
        val userEntity = userDao.delete(userObjectMapper.mapDomainToEntity(user)).entity
        return userObjectMapper.mapEntityToDomain(userEntity)
    }
}