package com.shanttiy.usecase.infrastructureboundary

import com.shanttiy.domain.model.Tag

interface TagInfrastructureBoundary {
    fun selectTagById(tagId: Int): Tag?

    fun selectTagsByUserId(userId: Int): List<Tag>

    fun insertTag(tag: Tag): Tag

    fun updateTag(tag: Tag): Tag

    fun deleteTag(tag: Tag): Tag
}