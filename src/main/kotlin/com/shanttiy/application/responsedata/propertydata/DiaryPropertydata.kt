package com.shanttiy.application.responsedata.propertydata

import com.shanttiy.application.usecaseboundary.ReplyUsecaseBoundary
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import com.shanttiy.domain.model.Diary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.time.LocalDate
import java.time.LocalDateTime

data class DiaryPropertydata(
    val id: Int,
    val user: SimplifiedUserPropertydata,
    val contentText: String,
    val postedAt: LocalDate,
    val createdAt: LocalDateTime?,
    val updatedAt: LocalDateTime?,
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
    private val replyPropertydataFactory: ReplyPropertydataFactory
){
    fun construct(diary: Diary): DiaryPropertydata{
        val user = userUsecaseBoundary.findUserById(diary.userId)
        val replies = replyUsecaseBoundary.findRepliesByDiaryId(diary.id)

        return DiaryPropertydata(
            id = diary.id!!,
            user = simplifiedUserPropertydataFactory.construct(user),
            contentText = diary.contentText,
            postedAt = diary.postedAt,
            createdAt = diary.createdAt,
            updatedAt = diary.updatedAt,
            replies = replies.map { replyPropertydataFactory.construct(it) }
        )
    }
}