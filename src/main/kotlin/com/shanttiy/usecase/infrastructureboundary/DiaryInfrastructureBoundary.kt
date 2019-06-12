package com.shanttiy.usecase.infrastructureboundary

import com.shanttiy.domain.model.Diary
import java.time.LocalDate

interface DiaryInfrastructureBoundary {
    fun selectDiariesByDate(from: LocalDate, to: LocalDate): List<Diary>

    fun selectDiaryById(diaryId: Int): Diary?

    fun selectDiaryByUserIdAndPostedAt(userId: Int, postedAt: LocalDate): Diary?

    fun insertDiary(diary: Diary): Diary

    fun updateDiary(diary: Diary): Diary

    fun deleteDiary(diary: Diary): Diary
}