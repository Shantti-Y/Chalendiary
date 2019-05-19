package com.shanttiy.infrastructure.dataaccess.entitymappertodomain

import com.shanttiy.domain.model.Diary
import com.shanttiy.framework.database.entity.DiaryDomaEntity
import org.springframework.stereotype.Component

@Component
class DiaryEntityMapperToDomain(
){
    fun mapEntityToDomain(diaryEntity: DiaryDomaEntity): Diary{
        return Diary(
            id = diaryEntity.id,
            teamId = diaryEntity.teamId,
            userId = diaryEntity.userId,
            contentText = diaryEntity.contentText,
            postedAt = diaryEntity.postedAt.toLocalDate(),
            createdAt = diaryEntity.createdAt?.toLocalDateTime(),
            updatedAt = diaryEntity.updatedAt?.toLocalDateTime()
        )
    }
}