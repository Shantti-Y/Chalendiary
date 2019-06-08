package com.shanttiy.application.usecaseboundary

import com.shanttiy.domain.model.Tag
import com.shanttiy.domain.model.User

interface TagUsecaseBoundary {
    fun findTagsByUserId(userId: Int?): List<Tag>

    fun postTag(tag: Tag): Tag

    fun patchTag(tag: Tag): Tag

    fun deleteTag(tagId: Int): Tag

    fun associateUsersToTag(tagId: Int, inputUserIds: List<Int>): Boolean
}