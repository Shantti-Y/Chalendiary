package com.shanttiy.usecase.infrastructureboundary

import com.shanttiy.domain.model.Reply

interface ReplyInfrastructureBoundary {
    fun selectRepliesByDiaryId(diaryId: Int): List<Reply>

    fun selectReplyById(replyId: Int): Reply?

    fun insertReply(reply: Reply): Reply

    fun updateReply(reply: Reply): Reply

    fun deleteReply(reply: Reply): Reply
}