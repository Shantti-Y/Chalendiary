package com.shanttiy.usecase.interactor

import com.shanttiy.application.usecaseboundary.DiaryUsecaseBoundary
import com.shanttiy.domain.model.Diary
import com.shanttiy.domain.model.User
import com.shanttiy.usecase.exception.AccessForbiddenException
import com.shanttiy.usecase.infrastructureboundary.DiaryInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.security.InvalidParameterException
import java.time.LocalDate

@Service
class DiaryInteractor(
    @Autowired
    private val diaryInfrastructureBoundary: DiaryInfrastructureBoundary
): DiaryUsecaseBoundary {
    override fun getDiariesInCondition(teamId: Int?, date: LocalDate): List<Diary> {
        if (teamId === null) throw InvalidParameterException()
        return diaryInfrastructureBoundary.selectDiariesInCondition(teamId, date)
    }

    override fun postDiary(diary: Diary): Diary {
        return diaryInfrastructureBoundary.insertDiary(diary)
    }
}