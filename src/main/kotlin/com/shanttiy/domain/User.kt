package com.shanttiy.domain

import java.io.Serializable

data class User(
    val id: Int,
    val name: String,
    val active: Boolean
): Serializable