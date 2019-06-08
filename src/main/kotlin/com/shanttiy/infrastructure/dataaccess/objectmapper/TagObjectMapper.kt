package com.shanttiy.infrastructure.dataaccess.objectmapper

import com.shanttiy.domain.model.Tag
import com.shanttiy.infrastructure.database.entity.TagEntity
import org.springframework.stereotype.Component
import java.sql.Date
import java.sql.Timestamp
import java.time.LocalDateTime

@Component
class TagObjectMapper{
    fun mapEntityToDomain(tagEntity: TagEntity): Tag {
        return Tag(
            id = tagEntity.id,
            name = tagEntity.name,
            ownerUserId = tagEntity.ownerUserId,
            publicFlag = tagEntity.publicFlag,
            createdAt = tagEntity.createdAt?.toLocalDateTime(),
            updatedAt = tagEntity.updatedAt?.toLocalDateTime()
        )
    }

    fun mapDomainToEntity(tag: Tag): TagEntity {
        return TagEntity(
            id = tag.id,
            name = tag.name,
            ownerUserId = tag.ownerUserId,
            publicFlag = tag.publicFlag,
            createdAt = if (tag.createdAt != null) {
                Timestamp.valueOf(tag.createdAt)
            } else {
                Timestamp.valueOf(LocalDateTime.now())
            },
            updatedAt = if (tag.updatedAt != null){
                Timestamp.valueOf(tag.updatedAt)
            } else if(tag.id != null && tag.id > 0) {
                Timestamp.valueOf(LocalDateTime.now())
            } else {
                null
            }
        )
    }
}