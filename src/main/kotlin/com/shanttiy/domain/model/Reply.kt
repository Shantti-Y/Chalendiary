package com.shanttiy.domain.model

import java.time.LocalDate
import java.time.LocalDateTime

data class Reply(
    val id: Int?,
    val diaryId: Int,
    val userId: Int,
    val contentText: String,
    val createdAt: LocalDateTime?,
    val updatedAt: LocalDateTime?
)