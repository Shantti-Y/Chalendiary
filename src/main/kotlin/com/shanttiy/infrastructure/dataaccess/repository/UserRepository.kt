package com.shanttiy.infrastructure.dataaccess.repository

import com.shanttiy.domain.model.User
import com.shanttiy.framework.database.dao.UserDomaDao
import com.shanttiy.infrastructure.dataaccess.entitymappertodomain.UserEntityMapperToDomain
import com.shanttiy.usecase.infrastructureboundary.UserInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository

@Repository
class UserRepository(
    @Autowired
    private val userDomaDao: UserDomaDao,
    @Autowired
    private val userEntityMapperToDomain: UserEntityMapperToDomain
): UserInfrastructureBoundary{
    override fun selectUserById(userId: Int): User {
        val userEntity = userDomaDao.selectUserById(userId)
        return userEntityMapperToDomain.mapEntityToDomain(userEntity)
    }

    override fun selectUserByUniqueId(uniqueId: String): User {
        val userEntity = userDomaDao.selectUserByUniqueId(uniqueId)
        return userEntityMapperToDomain.mapEntityToDomain(userEntity)
    }

    override fun selectUsersByTeamId(teamId: Int): List<User> {
        val usersEntities = userDomaDao.selectUsersByTeamId(teamId)
        return usersEntities.map { userEntity ->
            userEntityMapperToDomain.mapEntityToDomain(userEntity)
        }
    }

    override fun selectUsersByTagId(tagId: Int): List<User> {
        val usersEntities = userDomaDao.selectUsersByTagId(tagId)
        return usersEntities.map { userEntity ->
            userEntityMapperToDomain.mapEntityToDomain(userEntity)
        }
    }
}