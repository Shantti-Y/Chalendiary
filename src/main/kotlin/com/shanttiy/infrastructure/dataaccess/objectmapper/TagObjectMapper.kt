package com.shanttiy.infrastructure.dataaccess.objectmapper

import com.shanttiy.domain.model.Tag
import com.shanttiy.infrastructure.database.entity.TagEntity
import org.springframework.stereotype.Component

@Component
class TagObjectMapper{
    fun mapEntityToDomain(tagEntity: TagEntity): Tag {
        return Tag(
            id = tagEntity.id,
            name = tagEntity.name,
            ownerUserId = tagEntity.ownerUserId,
            description = tagEntity.description,
            publicFlag = tagEntity.publicFlag,
            createdAt = tagEntity.createdAt?.toLocalDateTime(),
            updatedAt = tagEntity.updatedAt?.toLocalDateTime()
        )
    }
}