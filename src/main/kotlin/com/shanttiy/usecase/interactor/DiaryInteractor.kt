package com.shanttiy.usecase.interactor

import com.shanttiy.application.usecaseboundary.DiaryUsecaseBoundary
import com.shanttiy.domain.model.Diary
import com.shanttiy.domain.model.User
import com.shanttiy.usecase.exception.AccessForbiddenException
import com.shanttiy.usecase.exception.RecordNotfoundException
import com.shanttiy.usecase.infrastructureboundary.DiaryInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.format.datetime.DateFormatter
import org.springframework.stereotype.Service
import java.security.InvalidParameterException
import java.time.LocalDate
import java.time.YearMonth
import java.time.format.DateTimeFormatter

@Service
class DiaryInteractor(
    @Autowired
    private val diaryInfrastructureBoundary: DiaryInfrastructureBoundary
): DiaryUsecaseBoundary {
    override fun findDiariesInDay(date: String?): List<Diary> {
        if(date == null) throw InvalidParameterException()
        val dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
        return diaryInfrastructureBoundary.selectDiariesByDate(
            LocalDate.parse(date, dateFormatter), LocalDate.parse(date, dateFormatter)
        )
    }

    override fun findDiariesInMonth(date: String?): List<Diary> {
        if(date == null || date.split(Regex("-")).size != 2) throw InvalidParameterException()
        val (year, month) = date.split(Regex("-")).map { it.toInt() }

        val from = YearMonth.of(year, month).atDay(1)
        val to = YearMonth.of(year, month).atEndOfMonth()
        return diaryInfrastructureBoundary.selectDiariesByDate(from, to)
    }

    override fun findDiaryById(diaryId: Int): Diary {
        val diary = diaryInfrastructureBoundary.selectDiaryById(diaryId)
        if(diary != null) return diary else throw RecordNotfoundException()
    }

    override fun postDiary(diary: Diary): Diary {
        return diaryInfrastructureBoundary.insertDiary(diary)
    }

    override fun patchDiary(diary: Diary): Diary {
        val searchedDiary = diaryInfrastructureBoundary.selectDiaryByUserIdAndPostedAt(diary.userId, diary.postedAt)
        if (searchedDiary != null) return diaryInfrastructureBoundary.updateDiary(diary) else throw InvalidParameterException()
    }

    override fun deleteDiary(diaryId: Int): Diary {
        val searchedDiary = diaryInfrastructureBoundary.selectDiaryById(diaryId)
        if (searchedDiary != null) return diaryInfrastructureBoundary.deleteDiary(searchedDiary) else throw InvalidParameterException()
    }
}