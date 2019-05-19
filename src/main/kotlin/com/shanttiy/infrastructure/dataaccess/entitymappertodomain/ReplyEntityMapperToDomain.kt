package com.shanttiy.infrastructure.dataaccess.entitymappertodomain

import com.shanttiy.domain.model.Reply
import com.shanttiy.framework.database.entity.ReplyDomaEntity
import org.springframework.stereotype.Component

@Component
class ReplyEntityMapperToDomain(
){
    fun mapEntityToDomain(replyEntity: ReplyDomaEntity): Reply {
        return Reply(
            id = replyEntity?.id,
            diaryId = replyEntity.diaryId,
            userId = replyEntity.userId,
            contentText = replyEntity.contentText,
            createdAt = replyEntity.createdAt?.toLocalDateTime(),
            updatedAt = replyEntity.updatedAt?.toLocalDateTime()
        )
    }
}