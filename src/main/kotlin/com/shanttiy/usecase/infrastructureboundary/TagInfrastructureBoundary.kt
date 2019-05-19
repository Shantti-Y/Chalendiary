package com.shanttiy.usecase.infrastructureboundary

import com.shanttiy.domain.model.Tag

interface TagInfrastructureBoundary {
    fun selectTagsByTeamId(teamId: Int): List<Tag>

    fun selectTagsByUserId(userId: Int): List<Tag>
}