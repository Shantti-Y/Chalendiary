package com.shanttiy.application.usecaseboundary

import com.shanttiy.domain.model.Tag
import com.shanttiy.domain.model.User

interface TagUsecaseBoundary {
    fun findTagsByUserId(userId: Int?): List<Tag>
}