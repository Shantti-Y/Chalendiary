package com.shanttiy.infrastructure.dataaccess.repository

import com.shanttiy.domain.model.Diary
import com.shanttiy.framework.database.dao.DiaryDomaDao
import com.shanttiy.infrastructure.dataaccess.domainmappertoentity.DiaryDomainMapperToEntity
import com.shanttiy.infrastructure.dataaccess.entitymappertodomain.DiaryEntityMapperToDomain
import com.shanttiy.usecase.infrastructureboundary.DiaryInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository
import java.sql.Date
import java.time.LocalDate

@Repository
class DiaryRepository(
    @Autowired
    private val diaryDomaDao: DiaryDomaDao,
    @Autowired
    private val diaryEntityMapperToDomain: DiaryEntityMapperToDomain,
    @Autowired
    private val diaryDomainMapperToDomain: DiaryDomainMapperToEntity
): DiaryInfrastructureBoundary {
    override fun selectDiariesInCondition(teamId: Int, date: LocalDate): List<Diary> {
        val diaryEntities = diaryDomaDao.selectDiariesInCondition(teamId, Date.valueOf(date))
        return diaryEntities.map { diaryEntity ->
            diaryEntityMapperToDomain.mapEntityToDomain(diaryEntity)
        }
    }

    override fun insertDiary(diary: Diary): Diary {
        val diaryEntityForInsert = diaryDomainMapperToDomain.mapDomaintoEntity(diary)
        val diaryEntityForFetch = diaryDomaDao.insertDiary(diaryEntityForInsert).entity
        return diaryEntityMapperToDomain.mapEntityToDomain(diaryEntityForFetch)

    }
}