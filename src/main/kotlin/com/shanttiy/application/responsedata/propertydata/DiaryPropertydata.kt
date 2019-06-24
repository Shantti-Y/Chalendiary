package com.shanttiy.application.responsedata.propertydata

import com.shanttiy.application.usecaseboundary.EmojiUsecaseBoundary
import com.shanttiy.application.usecaseboundary.ReplyUsecaseBoundary
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import com.shanttiy.domain.model.Diary
import com.shanttiy.domain.model.Emoji
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.time.LocalDate
import java.time.LocalDateTime

data class DiaryPropertydata(
    val id: Int,
    val user: SimplifiedUserPropertydata,
    val contentText: String,
    val postedAt: LocalDate,
    val emoji: EmojiPropertydata,
    val createdAt: LocalDateTime?,
    val updatedAt: LocalDateTime?,
    val deletedAt: LocalDateTime?,
    val replies: List<ReplyPropertydata>
)

@Component
class DiaryPropertydataFactory(
    @Autowired
    private val userUsecaseBoundary: UserUsecaseBoundary,
    @Autowired
    private val simplifiedUserPropertydataFactory: SimplifiedUserPropertydataFactory,
    @Autowired
    private val replyUsecaseBoundary: ReplyUsecaseBoundary,
    @Autowired
    private val replyPropertydataFactory: ReplyPropertydataFactory,
    @Autowired
    private val emojiUsecaseBoundary: EmojiUsecaseBoundary,
    @Autowired
    private val emojiPropertydataFactory: EmojiPropertydataFactory
){
    fun construct(diary: Diary): DiaryPropertydata{
        val user = userUsecaseBoundary.findUserById(diary.userId)
        val replies = replyUsecaseBoundary.findRepliesByDiaryId(diary.id)
        val emoji = emojiUsecaseBoundary.findEmojiById(diary.emojiId)

        return DiaryPropertydata(
            id = diary.id!!,
            user = simplifiedUserPropertydataFactory.construct(user),
            contentText = diary.contentText,
            postedAt = diary.postedAt,
            emoji = emojiPropertydataFactory.construct(emoji),
            createdAt = diary.createdAt,
            updatedAt = diary.updatedAt,
            deletedAt = diary.deletedAt,
            replies = replies.map { replyPropertydataFactory.construct(it) }
        )
    }
}