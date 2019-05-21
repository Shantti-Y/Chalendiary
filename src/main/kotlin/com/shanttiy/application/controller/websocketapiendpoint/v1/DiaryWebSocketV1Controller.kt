package com.shanttiy.application.controller.websocketapiendpoint.v1

import com.shanttiy.application.requestdata.DiaryRequestdata
import com.shanttiy.application.requestdata.propertydata.DiaryPropertydataAdapter
import com.shanttiy.application.responsedata.DiaryResponsedata
import com.shanttiy.application.responsedata.propertydata.DiaryPropertydataFactory
import com.shanttiy.application.usecaseboundary.DiaryUsecaseBoundary
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import com.shanttiy.domain.model.Diary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.stereotype.Controller

@Controller
class DiaryWebSocketV1Controller(
    @Autowired
    private val userUsecaseBoundary: UserUsecaseBoundary,
    @Autowired
    private val diaryUsecaseBoundary: DiaryUsecaseBoundary,
    @Autowired
    private val diaryPropertydataAdapter: DiaryPropertydataAdapter,
    @Autowired
    private val diaryPropertydataFactory: DiaryPropertydataFactory
){
    @MessageMapping("/diaries/new")
    @SendTo("/socket/diaries")
    fun postNewDiary(diaryRequestData: DiaryRequestdata): DiaryResponsedata {

        val diaryData = diaryPropertydataAdapter.construct(diaryRequestData.diary)

        //val createdDiary = diaryUsecaseBoundary.createDiary(diaryData)
        return DiaryResponsedata(
            date = diaryData.postedAt,
            diary = diaryPropertydataFactory.construct(Diary(
                id = 1,
                userId = diaryData.userId,
                contentText = diaryData.contentText,
                postedAt = diaryData.postedAt,
                createdAt = diaryData.createdAt,
                updatedAt = diaryData.updatedAt
            ))
        )
    }
}