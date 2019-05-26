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
    @SendTo("/socket/diaries/new")
    fun postNewDiary(diaryRequestData: DiaryRequestdata): DiaryResponsedata {
        val diaryData = diaryPropertydataAdapter.construct(diaryRequestData.diary)

        val createdDiary = diaryUsecaseBoundary.postDiary(diaryData)
        return DiaryResponsedata(
            diary = diaryPropertydataFactory.construct(createdDiary)
        )
    }

    @MessageMapping("/diaries/edit")
    @SendTo("/socket/diaries/edit")
    fun putDiary(diaryRequestData: DiaryRequestdata): DiaryResponsedata {
        val diaryData = diaryPropertydataAdapter.construct(diaryRequestData.diary)

        val createdDiary = diaryUsecaseBoundary.patchDiary(diaryData)
        return DiaryResponsedata(
            diary = diaryPropertydataFactory.construct(createdDiary)
        )
    }
}