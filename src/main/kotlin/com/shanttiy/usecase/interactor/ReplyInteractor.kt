package com.shanttiy.usecase.interactor

import com.shanttiy.application.usecaseboundary.ReplyUsecaseBoundary
import com.shanttiy.domain.model.Reply
import com.shanttiy.usecase.infrastructureboundary.ReplyInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.security.InvalidParameterException

@Service
class ReplyInteractor(
    @Autowired
    private val replyInfrastructureBoundary: ReplyInfrastructureBoundary
): ReplyUsecaseBoundary{
    override fun getRepliesByDiaryId(diaryId: Int?): List<Reply> {
        if (diaryId === null) throw InvalidParameterException()
        return replyInfrastructureBoundary.selectRepliesByDiaryId(diaryId)
    }
}
