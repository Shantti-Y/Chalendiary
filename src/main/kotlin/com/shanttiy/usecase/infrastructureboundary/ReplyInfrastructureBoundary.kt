package com.shanttiy.usecase.infrastructureboundary

import com.shanttiy.domain.model.Reply

interface ReplyInfrastructureBoundary {
    fun selectRepliesByDiaryId(diaryId: Int): List<Reply>
}