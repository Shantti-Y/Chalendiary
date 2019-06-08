package com.shanttiy.domain.model

import java.time.LocalDateTime

data class Tag(
    val id: Int?,
    val name: String,
    val ownerUserId: Int,
    val publicFlag: Boolean,
    val createdAt: LocalDateTime?,
    val updatedAt: LocalDateTime?
)