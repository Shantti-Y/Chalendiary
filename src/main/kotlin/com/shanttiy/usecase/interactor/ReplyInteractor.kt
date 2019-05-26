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
    override fun findRepliesByDiaryId(diaryId: Int?): List<Reply> {
        if (diaryId === null) throw InvalidParameterException()
        return replyInfrastructureBoundary.selectRepliesByDiaryId(diaryId)
    }

    override fun postReply(reply: Reply): Reply {
        return replyInfrastructureBoundary.insertReply(reply)
    }

    override fun patchReply(reply: Reply): Reply {
        val searchedReply = replyInfrastructureBoundary.selectReplyById(reply.id!!)
        if (searchedReply != null) return replyInfrastructureBoundary.updateReply(reply) else throw InvalidParameterException()
    }
}
