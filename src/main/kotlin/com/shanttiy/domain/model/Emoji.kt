package com.shanttiy.domain.model

data class Emoji(
    val id: Int,
    val value: String,
    val style: HashMap<String, String>
)