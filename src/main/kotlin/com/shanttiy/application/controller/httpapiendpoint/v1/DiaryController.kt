package com.shanttiy.application.controller.httpapiendpoint.v1

import com.shanttiy.application.requestdata.DiaryRequestdata
import com.shanttiy.application.requestdata.propertydata.DiaryPropertydataAdapter
import com.shanttiy.application.responsedata.DiariesInDayResponsedata
import com.shanttiy.application.responsedata.DiariesInMonthResponsedata
import com.shanttiy.application.responsedata.DiaryResponsedata
import com.shanttiy.application.responsedata.propertydata.DiaryPropertydataFactory
import com.shanttiy.application.usecaseboundary.DiaryUsecaseBoundary
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import java.time.LocalDate
import java.time.YearMonth
import java.time.format.DateTimeFormatter
import java.util.stream.IntStream
import kotlin.streams.toList

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
    @GetMapping("/date")
    fun getDiariesInDay(
        @RequestParam(name = "date") date: String,
        @RequestHeader("uid") uniqueId: String
    ): DiariesInDayResponsedata {
        val user = userUsecaseBoundary.findUserByUniqueId(uniqueId)

        val diaries = diaryUsecaseBoundary.findDiariesInDay(date)

        val diaryPropertydatas = diaries.map { diary -> diaryPropertydataFactory.construct(diary) }
        return DiariesInDayResponsedata(
            date = LocalDate.parse(date, DateTimeFormatter.ofPattern("yyyy-MM-dd")),
            diaries = diaryPropertydatas
        )
    }

    @GetMapping("/month")
    fun getDiariesInMonth(
        @RequestParam(name = "date") date: String,
        @RequestHeader("uid") uniqueId: String
    ): DiariesInMonthResponsedata {
        val user = userUsecaseBoundary.findUserByUniqueId(uniqueId)

        val diaries = diaryUsecaseBoundary.findDiariesInMonth(date)

        val (year, month) = date.split(Regex("-")).map { it.toInt() }

        val dayFrom = YearMonth.of(year, month).atDay(1).dayOfMonth
        val dayTo = YearMonth.of(year, month).atEndOfMonth().dayOfMonth

        val diariesInDayResponsedata = IntStream.range(dayFrom, dayTo).toList().map {
            val targetDate = YearMonth.of(year, month).atDay(it)
            val diaryPropertydatas = diaries.filter { diary ->
                diary.postedAt == targetDate
            }.map { diary -> diaryPropertydataFactory.construct(diary)}

            DiariesInDayResponsedata(date = targetDate, diaries = diaryPropertydatas)
        }

        return DiariesInMonthResponsedata(year = year, month = month, items = diariesInDayResponsedata)
    }

    @PostMapping("")
    fun postNewDiary(
        @RequestBody diaryRequestData: DiaryRequestdata,
        @RequestHeader("uid") uniqueId: String
    ): DiaryResponsedata {
        val user = userUsecaseBoundary.findUserByUniqueId(uniqueId)

        val diaryData = diaryPropertydataAdapter.construct(diaryRequestData.diary)
        val createdDiary = diaryUsecaseBoundary.createDiary(diaryData)
        return DiaryResponsedata(
            createdDiary.postedAt,
            diaryPropertydataFactory.construct(createdDiary)
        )
    }
}