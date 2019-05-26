package com.shanttiy.application.requestdata.propertydata

import com.shanttiy.domain.model.Reply
import org.springframework.stereotype.Component
import java.io.Serializable

data class ReplyPropertydata(
    val id: Int?,
    val diaryId: Int,
    val userId: Int,
    val contentText: String
): Serializable

@Component
class ReplyPropertydataAdapter {
    fun construct(replyPropertydata: ReplyPropertydata): Reply {
        return Reply(
            id = replyPropertydata.id,
            diaryId = replyPropertydata.diaryId,
            userId = replyPropertydata.userId,
            contentText = replyPropertydata.contentText,
            createdAt = null,
            updatedAt = null
        )
    }
}