package com.shanttiy.domain.model

import java.time.LocalDateTime

data class Tag(
    val id: Int?,
    val name: String,
    val teamId: Int,
    val ownerUserId: Int,
    val description: String,
    val publicFlag: Boolean,
    val createdAt: LocalDateTime?,
    val updatedAt: LocalDateTime?
)