package com.shanttiy.usecase.infrastructureboundary

import com.shanttiy.domain.model.User

interface UserInfrastructureBoundary {
    fun selectUserById(userId: Int): User

    fun selectUserByUniqueId(uniqueId: String): User

    fun selectUsersByTeamId(teamId: Int): List<User>

    fun selectUsersByTagId(tadId: Int): List<User>
}