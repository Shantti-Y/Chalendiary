package com.shanttiy.infrastructure.dataaccess.objectmapper

import com.shanttiy.domain.model.User
import com.shanttiy.infrastructure.database.entity.UserEntity
import org.springframework.stereotype.Component

@Component
class UserObjectMapper{
    fun mapEntityToDomain(userEntity: UserEntity): User {
        return User(
            id = userEntity.id,
            uniqueId = userEntity.uniqueId,
            screenName = userEntity.screenName,
            email = userEntity.email,
            thumbnailPath = userEntity.thumbnailPath,
            phone = userEntity.phone,
            createdAt = userEntity.createdAt?.toLocalDateTime(),
            updatedAt = userEntity.updatedAt?.toLocalDateTime()
        )
    }
}