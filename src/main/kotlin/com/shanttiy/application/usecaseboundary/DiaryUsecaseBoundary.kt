package com.shanttiy.application.usecaseboundary

import com.shanttiy.domain.model.Diary
import com.shanttiy.domain.model.User
import java.time.LocalDate

interface DiaryUsecaseBoundary {
    fun findDiariesInDay(date: String?): List<Diary>

    fun findDiariesInMonth(date: String?): List<Diary>

    fun createDiary(diary: Diary): Diary
}