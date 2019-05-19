package com.shanttiy.usecase.infrastructureboundary

import com.shanttiy.domain.model.User

interface UserInfrastructureBoundary {
    fun selectAllUsers(): List<User>

    fun selectUserById(userId: Int): User?

    fun selectUserByUniqueId(uniqueId: String): User?

    fun selectUserByTagId(tagId: Int): List<User>
}