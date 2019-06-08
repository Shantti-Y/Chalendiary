package com.shanttiy.infrastructure.dataaccess.objectmapper

import com.shanttiy.domain.model.UserTag
import com.shanttiy.infrastructure.database.entity.UserTagEntity
import org.springframework.stereotype.Component
import java.sql.Timestamp
import java.time.LocalDateTime

@Component
class UserTagObjectMapper{
    fun mapEntityToDomain(userTagEntity: UserTagEntity): UserTag {
        return UserTag(
            id = userTagEntity.id,
            userId = userTagEntity.userId,
            tagId = userTagEntity.tagId
        )
    }

    fun mapDomainToEntity(userTag: UserTag): UserTagEntity {
        return UserTagEntity(
            id = userTag.id,
            userId = userTag.userId,
            tagId = userTag.tagId,
            createdAt = Timestamp.valueOf(LocalDateTime.now())
        )
    }
}