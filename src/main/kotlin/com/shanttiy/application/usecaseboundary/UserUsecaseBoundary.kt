package com.shanttiy.application.usecaseboundary

import com.shanttiy.domain.model.User

interface UserUsecaseBoundary {
    fun getUserById(userId: Int?): User

    fun getCurrentUser(uniqueId: String): User

    fun getUsersByTeamId(teamId: Int?): List<User>

    fun getUsersByTagId(tagId: Int?): List<User>
}