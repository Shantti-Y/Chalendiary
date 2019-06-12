package com.shanttiy.application.usecaseboundary

import com.shanttiy.domain.model.Diary
import com.shanttiy.domain.model.User
import java.time.LocalDate

interface DiaryUsecaseBoundary {
    fun findDiariesInDay(date: String?): List<Diary>

    fun findDiariesInMonth(date: String?): List<Diary>

    fun findDiaryById(diaryId: Int): Diary

    fun postDiary(diary: Diary): Diary

    fun patchDiary(diary: Diary): Diary

    fun deleteDiary(diaryId: Int): Diary
}