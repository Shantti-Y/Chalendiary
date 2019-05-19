package com.shanttiy.infrastructure.dataaccess.repository

import com.shanttiy.domain.model.Diary
import com.shanttiy.infrastructure.dataaccess.entitymappertodomain.DiaryObjectMapper
import com.shanttiy.infrastructure.database.dao.DiaryDao
import com.shanttiy.usecase.infrastructureboundary.DiaryInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository
import java.sql.Date
import java.time.LocalDate

@Repository
class DiaryRepository(
    @Autowired
    private val diaryDao: DiaryDao,
    @Autowired
    private val diaryObjectMapper: DiaryObjectMapper
): DiaryInfrastructureBoundary {
    override fun selectDiariesByDate(from: LocalDate, to: LocalDate): List<Diary> {
        val diaryEntities = diaryDao.selectByDateInRange(
            Date.valueOf(from), Date.valueOf(to)
        )
        return diaryEntities.map { entity -> diaryObjectMapper.mapEntityToDomain(entity) }
    }

    override fun selectDiaryById(diaryId: Int): Diary? {
        val diaryEntity = diaryDao.selectById(diaryId)
        if(diaryEntity != null) return diaryObjectMapper.mapEntityToDomain(diaryEntity) else return null
    }

    override fun insertDiary(diary: Diary): Diary {
        val diaryEntity = diaryDao.insert(diaryObjectMapper.mapDomainToEntity(diary)).entity
        return diaryObjectMapper.mapEntityToDomain(diaryEntity)
    }
}