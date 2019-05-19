package com.shanttiy.application.controller.httpapiendpoint.v1

import com.shanttiy.application.requestdata.DiaryRequestdata
import com.shanttiy.application.requestdata.propertydata.DiaryPropertydataAdapter
import com.shanttiy.application.responsedata.DiariesResponsedata
import com.shanttiy.application.responsedata.DiaryResponsedata
import com.shanttiy.application.responsedata.propertydata.DiaryPropertydataFactory
import com.shanttiy.application.usecaseboundary.DiaryUsecaseBoundary
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import java.time.LocalDate
import java.time.format.DateTimeFormatter

@RestController
@RequestMapping("/api/v1/diaries")
class DiaryController(
    @Autowired
    private val diaryUsecaseBoundary: DiaryUsecaseBoundary,
    @Autowired
    private val userUsecaseBoundary: UserUsecaseBoundary,
    @Autowired
    private val diaryPropertydataFactory: DiaryPropertydataFactory,
    @Autowired
    private val diaryPropertydataAdapter: DiaryPropertydataAdapter
){
    @GetMapping("")
    fun getDiariesInSearchQuery(
        @RequestParam(name = "teamId") teamId: Int,
        @RequestParam(name = "date") date: String,
        @RequestHeader("uid") uniqueId: String
    ): DiariesResponsedata {
        val user = userUsecaseBoundary.getCurrentUser(uniqueId)

        val formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd")
        val diaries = diaryUsecaseBoundary.getDiariesInCondition(teamId, LocalDate.parse(date, formatter))

        val diaryPropertydatas = diaries.map { diary -> diaryPropertydataFactory.construct(diary) }
        return DiariesResponsedata(diaryPropertydatas)
    }

    @PostMapping("")
    fun postDiary(
        @RequestBody diaryRequestdata: DiaryRequestdata,
        @RequestHeader("uid") uniqueId: String
    ): DiaryResponsedata {
        val user = userUsecaseBoundary.getCurrentUser(uniqueId)
        val diaryForPost = diaryPropertydataAdapter.construct(diaryRequestdata.diary)

        val diaryForResponse = diaryUsecaseBoundary.postDiary(diaryForPost)
        return DiaryResponsedata(diaryPropertydataFactory.construct(diaryForResponse))
    }
}