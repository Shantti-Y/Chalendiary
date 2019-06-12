package com.shanttiy.domain.model

import java.time.LocalDate
import java.time.LocalDateTime

data class Diary(
    val id: Int?,
    val userId: Int,
    val contentText: String,
    val postedAt: LocalDate,
    val createdAt: LocalDateTime?,
    val updatedAt: LocalDateTime?,
    val deletedAt: LocalDateTime?
)