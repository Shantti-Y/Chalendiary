package com.shanttiy.application.requestdata.propertydata

import com.shanttiy.domain.model.Diary
import org.springframework.stereotype.Component
import java.io.Serializable
import java.time.LocalDate
import java.time.format.DateTimeFormatter

data class DiaryPropertydata(
    val id: Int?,
    val userId: Int,
    val contentText: String,
    val postedAt: String,
    val emojiId: Int
): Serializable

@Component
class DiaryPropertydataAdapter {
    fun construct(diaryPropertydata: DiaryPropertydata): Diary {
        val localdateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
        return Diary(
            id = diaryPropertydata.id,
            userId = diaryPropertydata.userId,
            contentText = diaryPropertydata.contentText,
            postedAt = LocalDate.parse(diaryPropertydata.postedAt, localdateFormatter),
            emojiId = diaryPropertydata.emojiId,
            // TODO: set these properties into client side
            createdAt = null,
            updatedAt = null,
            deletedAt = null
        )
    }
}