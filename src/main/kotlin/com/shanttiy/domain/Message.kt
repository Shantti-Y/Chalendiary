package com.shanttiy.domain

import java.io.Serializable

data class Message(
    val user: User,
    val textContent: String
): Serializable