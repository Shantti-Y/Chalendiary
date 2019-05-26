package com.shanttiy.domain.model

import java.time.LocalDateTime

open class User(
    val id: Int?,
    val screenName: String,
    val email: String,
    val thumbnailPath: String,
    val phone: String?,
    val uniqueId: String,
    val createdAt: LocalDateTime?,
    val updatedAt: LocalDateTime?
)