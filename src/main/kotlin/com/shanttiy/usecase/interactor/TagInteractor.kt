package com.shanttiy.usecase.interactor

import com.shanttiy.application.usecaseboundary.TagUsecaseBoundary
import com.shanttiy.domain.model.Tag
import com.shanttiy.usecase.infrastructureboundary.TagInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.security.InvalidParameterException

@Service
class TagInteractor(
    @Autowired
    private val tagInfrastructureBoundary: TagInfrastructureBoundary
): TagUsecaseBoundary {
    override fun getTagsByTeamId(teamId: Int?): List<Tag> {
        if (teamId === null) throw InvalidParameterException()
        return tagInfrastructureBoundary.selectTagsByTeamId(teamId)
    }

    override fun getTagsByUserId(userId: Int?): List<Tag> {
        if (userId === null) throw InvalidParameterException()
        return tagInfrastructureBoundary.selectTagsByUserId(userId)
    }
}