package com.shanttiy.application.usecaseboundary

import com.shanttiy.domain.model.Diary
import com.shanttiy.domain.model.User
import java.time.LocalDate

interface DiaryUsecaseBoundary {
    fun getDiariesInCondition(teamId: Int?, date: LocalDate): List<Diary>

    fun postDiary(diary: Diary): Diary
}