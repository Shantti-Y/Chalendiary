package com.shanttiy.usecase.infrastructureboundary

import com.shanttiy.domain.model.Diary
import java.time.LocalDate

interface DiaryInfrastructureBoundary {
    fun selectDiariesInCondition(teamId: Int, date: LocalDate): List<Diary>

    fun insertDiary(diary: Diary): Diary
}