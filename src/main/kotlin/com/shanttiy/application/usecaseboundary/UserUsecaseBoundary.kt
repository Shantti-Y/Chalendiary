package com.shanttiy.application.usecaseboundary

import com.shanttiy.domain.model.User

interface UserUsecaseBoundary {
    fun findAllUsers(): List<User>

    fun findUserById(userId: Int?): User

    fun findUserByUniqueId(uniqueId: String?): User

    fun findUsersByTagId(tagId: Int?): List<User>
}