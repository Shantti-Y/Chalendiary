package com.shanttiy.domain.model

import java.time.LocalDateTime

data class Team(
    val id: Int?,
    val name: String,
    val domain: String,
    val thumbnailPath: String,
    val description: String,
    val createdAt: LocalDateTime?,
    val updatedAt: LocalDateTime?
)