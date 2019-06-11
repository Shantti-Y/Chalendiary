package com.shanttiy.application.usecaseboundary

import com.shanttiy.domain.model.Reply

interface ReplyUsecaseBoundary {
    fun findRepliesByDiaryId(diaryId: Int?): List<Reply>

    fun postReply(reply: Reply): Reply

    fun patchReply(reply: Reply): Reply

    fun deleteReply(replyId: Int): Reply
}