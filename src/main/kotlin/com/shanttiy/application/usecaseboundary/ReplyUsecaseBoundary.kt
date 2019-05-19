package com.shanttiy.application.usecaseboundary

import com.shanttiy.domain.model.Reply

interface ReplyUsecaseBoundary {
    fun findRepliesByDiaryId(diaryId: Int?): List<Reply>
}