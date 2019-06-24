package com.shanttiy.infrastructure.dataaccess.entitymappertodomain

import com.shanttiy.domain.model.Diary
import com.shanttiy.infrastructure.database.entity.DiaryEntity
import org.springframework.stereotype.Component
import java.sql.Date
import java.sql.Timestamp
import java.time.LocalDateTime

@Component
class DiaryObjectMapper{
    fun mapEntityToDomain(diaryEntity: DiaryEntity): Diary {
        return Diary(
            id = diaryEntity.id,
            userId = diaryEntity.userId,
            contentText = diaryEntity.contentText,
            postedAt = diaryEntity.postedAt.toLocalDate(),
            emojiId = diaryEntity.emojiId,
            createdAt = diaryEntity.createdAt?.toLocalDateTime(),
            updatedAt = diaryEntity.updatedAt?.toLocalDateTime(),
            deletedAt = diaryEntity.deletedAt?.toLocalDateTime()
        )
    }

    fun mapDomainToEntity(diary: Diary): DiaryEntity {
        return DiaryEntity(
            id = diary.id,
            userId = diary.userId,
            contentText = diary.contentText,
            postedAt = Date.valueOf(diary.postedAt),
            emojiId = diary.emojiId,
            createdAt = if (diary.createdAt != null) {
                Timestamp.valueOf(diary.createdAt)
            } else {
                Timestamp.valueOf(LocalDateTime.now())
            },
            updatedAt = if (diary.updatedAt != null){
                Timestamp.valueOf(diary.updatedAt)
            } else if(diary.id != null && diary.id > 0) {
                Timestamp.valueOf(LocalDateTime.now())
            } else {
                null
            },
            deletedAt = if (diary.deletedAt != null){
                Timestamp.valueOf(diary.deletedAt)
            } else {
                null
            }
        )
    }
}