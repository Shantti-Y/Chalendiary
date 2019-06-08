package com.shanttiy.usecase.interactor

import com.shanttiy.application.usecaseboundary.TagUsecaseBoundary
import com.shanttiy.domain.model.Tag
import com.shanttiy.domain.model.UserTag
import com.shanttiy.usecase.infrastructureboundary.TagInfrastructureBoundary
import com.shanttiy.usecase.infrastructureboundary.UserTagInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.security.InvalidParameterException

@Service
class TagInteractor(
    @Autowired
    private val tagInfrastructureBoundary: TagInfrastructureBoundary,
    @Autowired
    private val userTagInfrastructureBoundary: UserTagInfrastructureBoundary
): TagUsecaseBoundary {
    override fun findTagsByUserId(userId: Int?): List<Tag> {
        if (userId === null) throw InvalidParameterException()
        return tagInfrastructureBoundary.selectTagsByUserId(userId)
    }

    override fun postTag(tag: Tag): Tag {
        return tagInfrastructureBoundary.insertTag(tag)
    }

    override fun patchTag(tag: Tag): Tag {
        val searchedTag = tagInfrastructureBoundary.selectTagById(tag.id!!)
        if (searchedTag != null) return tagInfrastructureBoundary.updateTag(tag) else throw InvalidParameterException()
    }

    override fun deleteTag(tagId: Int): Tag {
        val searchedTag = tagInfrastructureBoundary.selectTagById(tagId)
        if (searchedTag != null) return tagInfrastructureBoundary.deleteTag(searchedTag) else throw InvalidParameterException()
    }

    override fun associateUsersToTag(tagId: Int, inputUserIds: List<Int>): Boolean {
        val searchedTag = tagInfrastructureBoundary.selectTagById(tagId)
        if (searchedTag != null) {
            val searchedUserIds = userTagInfrastructureBoundary.selectUserTagsByTagId(tagId).map { it.userId }
            val userIdsForInsert = inputUserIds.minus(searchedUserIds)

            userIdsForInsert.map {
                userTagInfrastructureBoundary.insertUserTag(UserTag(id = null, userId = it!!, tagId = tagId))
            }

            val userIdsForDelete = searchedUserIds.minus(inputUserIds)

            userIdsForDelete.map {
                userTagInfrastructureBoundary.deleteUserTag(UserTag(id = null, userId = it!!, tagId = tagId))
            }
            return true
        } else {
            throw InvalidParameterException()
        }

    }
}