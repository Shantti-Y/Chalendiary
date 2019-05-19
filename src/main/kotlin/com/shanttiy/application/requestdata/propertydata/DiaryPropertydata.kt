package com.shanttiy.application.requestdata.propertydata

import com.shanttiy.domain.model.Diary
import org.springframework.stereotype.Component
import java.time.LocalDate
import java.time.format.DateTimeFormatter

data class DiaryPropertydata(
    val id: Int?,
    val teamId: Int,
    val userId: Int,
    val contentText: String,
    val postedAt: String
)

@Component
class DiaryPropertydataAdapter {
    fun construct(diaryPropertydata: DiaryPropertydata): Diary {
        val localdateFormatter = DateTimeFormatter.ofPattern("yyyy/MM/dd")
        return Diary(
            id = diaryPropertydata.id,
            teamId = diaryPropertydata.teamId,
            userId = diaryPropertydata.userId,
            contentText = diaryPropertydata.contentText,
            postedAt = LocalDate.parse(diaryPropertydata.postedAt, localdateFormatter),
            createdAt = null,
            updatedAt = null
        )
    }
}