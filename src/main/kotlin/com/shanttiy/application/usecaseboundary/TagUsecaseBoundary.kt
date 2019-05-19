package com.shanttiy.application.usecaseboundary

import com.shanttiy.domain.model.Tag
import com.shanttiy.domain.model.User

interface TagUsecaseBoundary {
    fun getTagsByTeamId(teamId: Int?): List<Tag>

    fun getTagsByUserId(userId: Int?): List<Tag>
}