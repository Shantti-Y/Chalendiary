package com.shanttiy.infrastructure.dataaccess.objectmapper

import com.shanttiy.domain.model.User
import com.shanttiy.infrastructure.database.entity.UserEntity
import org.springframework.stereotype.Component
import java.sql.Timestamp
import java.time.LocalDateTime

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

    fun mapDomainToEntity(user: User): UserEntity {
        return UserEntity(
            id = user.id,
            uniqueId = user.uniqueId,
            screenName = user.screenName,
            email = user.email,
            thumbnailPath = user.thumbnailPath,
            phone = user.phone ?: "",
            createdAt = if (user.createdAt != null) {
                Timestamp.valueOf(user.createdAt)
            } else {
                Timestamp.valueOf(LocalDateTime.now())
            },
            updatedAt = if (user.updatedAt != null){
                Timestamp.valueOf(user.updatedAt)
            } else if(user.id != null && user.id > 0) {
                Timestamp.valueOf(LocalDateTime.now())
            } else {
                null
            }
        )
    }
}