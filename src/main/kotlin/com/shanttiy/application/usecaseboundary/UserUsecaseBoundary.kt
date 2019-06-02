package com.shanttiy.application.usecaseboundary

import com.shanttiy.domain.model.User

interface UserUsecaseBoundary {
    fun findAllUsers(): List<User>

    fun findUserById(userId: Int?): User

    fun findUserByToken(authorization: String): User

    fun findUsersByTagId(tagId: Int?): List<User>
}