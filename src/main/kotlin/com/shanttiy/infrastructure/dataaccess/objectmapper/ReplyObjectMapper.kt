package com.shanttiy.infrastructure.dataaccess.objectmapper

import com.shanttiy.domain.model.Reply
import com.shanttiy.infrastructure.database.entity.ReplyEntity
import org.springframework.stereotype.Component
import java.sql.Timestamp
import java.time.LocalDateTime

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

    fun mapDomainToEntity(reply: Reply): ReplyEntity {
        return ReplyEntity(
            id = reply.id,
            diaryId = reply.diaryId,
            userId = reply.userId,
            contentText = reply.contentText,
            createdAt = if (reply.createdAt != null) {
                Timestamp.valueOf(reply.createdAt)
            } else {
                Timestamp.valueOf(LocalDateTime.now())
            },
            updatedAt = if (reply.updatedAt != null){
                Timestamp.valueOf(reply.updatedAt)
            } else if(reply.id != null && reply.id > 0) {
                Timestamp.valueOf(LocalDateTime.now())
            } else {
                null
            }
        )
    }
}