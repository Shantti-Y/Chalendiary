package com.shanttiy.application.controller.websocketapiendpoint.v1

import com.shanttiy.application.requestdata.OnlyIdRequestdata
import com.shanttiy.application.requestdata.ReplyRequestdata
import com.shanttiy.application.requestdata.propertydata.ReplyPropertydataAdapter
import com.shanttiy.application.responsedata.ReplyResponsedata
import com.shanttiy.application.responsedata.propertydata.DiaryPropertydataFactory
import com.shanttiy.application.responsedata.propertydata.ReplyPropertydataFactory
import com.shanttiy.application.usecaseboundary.DiaryUsecaseBoundary
import com.shanttiy.application.usecaseboundary.ReplyUsecaseBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.stereotype.Controller

@Controller
class ReplyWebSocketV1Controller(
    @Autowired
    private val replyUsecaseBoundary: ReplyUsecaseBoundary,
    @Autowired
    private val replyPropertydataAdapter: ReplyPropertydataAdapter,
    @Autowired
    private val replyPropertydataFactory: ReplyPropertydataFactory,
    @Autowired
    private val diaryUsecaseBoundary: DiaryUsecaseBoundary,
    @Autowired
    private val diaryPropertydataFactory: DiaryPropertydataFactory
){
    @MessageMapping("/replies/new")
    @SendTo("/socket/replies/new")
    fun postNewReply(replyRequestdata: ReplyRequestdata): ReplyResponsedata{
        val replyData = replyPropertydataAdapter.construct(replyRequestdata.reply)

        val createdReply = replyUsecaseBoundary.postReply(replyData)

        val diary = diaryUsecaseBoundary.findDiaryById(createdReply.diaryId)

        return ReplyResponsedata(
            diary = diaryPropertydataFactory.construct(diary),
            reply = replyPropertydataFactory.construct(createdReply)
        )
    }

    @MessageMapping("/replies/edit")
    @SendTo("/socket/replies/edit")
    fun patchReply(replyRequestdata: ReplyRequestdata): ReplyResponsedata{
        val replyData = replyPropertydataAdapter.construct(replyRequestdata.reply)

        val createdReply = replyUsecaseBoundary.patchReply(replyData)

        val diary = diaryUsecaseBoundary.findDiaryById(createdReply.diaryId)

        return ReplyResponsedata(
            diary = diaryPropertydataFactory.construct(diary),
            reply = replyPropertydataFactory.construct(createdReply)
        )
    }

    @MessageMapping("/replies/destroy")
    @SendTo("/socket/replies/destroy")
    fun deleteReply(idRequestdata: OnlyIdRequestdata): ReplyResponsedata{
        val replyId = idRequestdata.id

        val deletedReply = replyUsecaseBoundary.deleteReply(replyId)

        val diary = diaryUsecaseBoundary.findDiaryById(deletedReply.diaryId)

        return ReplyResponsedata(
            diary = diaryPropertydataFactory.construct(diary),
            reply = replyPropertydataFactory.construct(deletedReply)
        )
    }
}