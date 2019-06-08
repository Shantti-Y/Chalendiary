package com.shanttiy.usecase.infrastructureboundary

import com.shanttiy.domain.model.UserTag

interface UserTagInfrastructureBoundary {
    fun selectUserTagsByTagId(tagId: Int): List<UserTag>

    fun selectUserTagsByUserId(userId: Int): List<UserTag>

    fun insertUserTag(userTag: UserTag): UserTag

    fun deleteUserTag(userTag: UserTag): UserTag
}