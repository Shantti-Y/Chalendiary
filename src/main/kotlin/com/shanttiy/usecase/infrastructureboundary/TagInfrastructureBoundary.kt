package com.shanttiy.usecase.infrastructureboundary

import com.shanttiy.domain.model.Tag

interface TagInfrastructureBoundary {
    fun selectTagsByUserId(userId: Int): List<Tag>
}