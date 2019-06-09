package com.shanttiy.application.controller.httpapiendpoint.v1

import com.shanttiy.application.responsedata.TagsResponsedata
import com.shanttiy.application.responsedata.propertydata.FullTagPropertydataFactory
import com.shanttiy.application.usecaseboundary.TagUsecaseBoundary
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/tags")
class TagApiV1Controller(
    @Autowired
    private val tagUsecaseBoundary: TagUsecaseBoundary,
    @Autowired
    private val userUsecaseBoundary: UserUsecaseBoundary,
    @Autowired
    private val fullTagPropertydataFactory: FullTagPropertydataFactory
){

    @GetMapping("")
    fun getMyTags(
        @RequestHeader("Authorization") authorization: String
    ): TagsResponsedata {
        val user = userUsecaseBoundary.findUserByToken(authorization)

        val tags = tagUsecaseBoundary.findTagsByUserId(user.id)

        val tagPropertydatas = tags.map { tag -> fullTagPropertydataFactory.construct(tag) }

        return TagsResponsedata(tagPropertydatas)
    }
}