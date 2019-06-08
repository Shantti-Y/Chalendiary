package com.shanttiy.application.controller.websocketapiendpoint.v1

import com.shanttiy.application.requestdata.OnlyIdRequestdata
import com.shanttiy.application.requestdata.TagRequestdata
import com.shanttiy.application.requestdata.propertydata.TagPropertydataAdapter
import com.shanttiy.application.responsedata.TagResponsedata
import com.shanttiy.application.responsedata.propertydata.FullTagPropertydataFactory
import com.shanttiy.application.usecaseboundary.TagUsecaseBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.stereotype.Controller
import org.springframework.transaction.annotation.Transactional

@Controller
class TagWebSocketV1Controller(
    @Autowired
    private val fullTagPropertydataFactory: FullTagPropertydataFactory,
    @Autowired
    private val tagPropertydataAdapter: TagPropertydataAdapter,
    @Autowired
    private val tagUsecaseBoundary: TagUsecaseBoundary

){
    @MessageMapping("/tags/new")
    @SendTo("/socket/tags/new")
    @Transactional
    fun postNewTag(tagRequestdata: TagRequestdata): TagResponsedata {
        val tagData = tagPropertydataAdapter.construct(tagRequestdata.tag)
        val createdTag = tagUsecaseBoundary.postTag(tagData)

        val userIds = tagRequestdata.userIds
        tagUsecaseBoundary.associateUsersToTag(createdTag.id!!, userIds)

        return TagResponsedata(fullTagPropertydataFactory.construct(createdTag))
    }

    @MessageMapping("/tags/edit")
    @SendTo("/socket/tags/edit")
    @Transactional
    fun putTag(tagRequestdata: TagRequestdata): TagResponsedata {
        val tagData = tagPropertydataAdapter.construct(tagRequestdata.tag)
        val updatedTag = tagUsecaseBoundary.patchTag(tagData)

        val userIds = tagRequestdata.userIds
        tagUsecaseBoundary.associateUsersToTag(updatedTag.id!!, userIds)

        return TagResponsedata(fullTagPropertydataFactory.construct(updatedTag))
    }

    @MessageMapping("/tags/destroy")
    @SendTo("/socket/tags/destroy")
    @Transactional
    fun deleteTag(onlyIdRequestdata: OnlyIdRequestdata): TagResponsedata {
        val tagId = onlyIdRequestdata.id
        tagUsecaseBoundary.associateUsersToTag(tagId, listOf())
        val deletedTag = tagUsecaseBoundary.deleteTag(tagId)
        return TagResponsedata(fullTagPropertydataFactory.construct(deletedTag))
    }
}