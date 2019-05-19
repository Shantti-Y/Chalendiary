package com.shanttiy.infrastructure.dataaccess.domainmappertoentity

import com.shanttiy.domain.model.Diary
import com.shanttiy.framework.database.entity.DiaryDomaEntity
import org.springframework.stereotype.Component
import java.sql.Date
import java.sql.Timestamp
import java.time.LocalDateTime

@Component
class DiaryDomainMapperToEntity{
    fun mapDomaintoEntity(diary: Diary): DiaryDomaEntity{
        return DiaryDomaEntity(
            id = diary.id,
            teamId = diary.teamId,
            userId = diary.userId,
            contentText = diary.contentText,
            postedAt = Date.valueOf(diary.postedAt),
            createdAt = if(diary.createdAt != null) Timestamp.valueOf(diary.createdAt) else Timestamp.valueOf(LocalDateTime.now()),
            updatedAt = if(diary.updatedAt != null) Timestamp.valueOf(diary.updatedAt) else null
        )
    }
}