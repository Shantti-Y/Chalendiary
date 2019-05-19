package com.shanttiy.application.usecaseboundary

import com.shanttiy.domain.model.Reply

interface ReplyUsecaseBoundary {
    fun getRepliesByDiaryId(diaryId: Int?): List<Reply>
}