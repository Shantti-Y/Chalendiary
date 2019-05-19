package com.shanttiy.infrastructure.dataaccess.objectmapper

import com.shanttiy.domain.model.Reply
import com.shanttiy.infrastructure.database.entity.ReplyEntity
import org.springframework.stereotype.Component

@Component
class ReplyObjectMapper{
    fun mapEntityToDomain(replyEntity: ReplyEntity): Reply {
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