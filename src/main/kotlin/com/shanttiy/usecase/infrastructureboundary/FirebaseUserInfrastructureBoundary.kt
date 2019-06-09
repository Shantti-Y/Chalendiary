package com.shanttiy.usecase.infrastructureboundary

import com.shanttiy.domain.model.User

interface FirebaseUserInfrastructureBoundary {

    fun getVerifiedUniqueId(authorizationToken: String): String

    fun selectUser(uniqueId: String): User

    fun getCustomToken(uniqueId: String): String

    fun updateUserDisabled(authorizationToken: String, disabled: Boolean): User

    fun updateUser(user: User): String

    //fun deleteUser(user: User): User
}