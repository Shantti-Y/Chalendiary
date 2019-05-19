package com.shanttiy.infrastructure.dataaccess.entitymappertodomain

import com.shanttiy.domain.model.Tag
import com.shanttiy.framework.database.dao.UserDomaDao
import com.shanttiy.framework.database.entity.TagDomaEntity
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class TagEntityMapperToDomain(
){
    fun mapEntityToDomain(tagEntity: TagDomaEntity): Tag{
        return Tag(
            id = tagEntity.id,
            name = tagEntity.name,
            teamId = tagEntity.teamId,
            ownerUserId = tagEntity.ownerUserId,
            description = tagEntity.description,
            publicFlag = tagEntity.publicFlag,
            createdAt = tagEntity.createdAt?.toLocalDateTime(),
            updatedAt = tagEntity.updatedAt?.toLocalDateTime()
        )
    }
}