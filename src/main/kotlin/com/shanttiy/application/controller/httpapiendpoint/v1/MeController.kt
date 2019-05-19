package com.shanttiy.application.controller.httpapiendpoint.v1

import com.shanttiy.application.responsedata.UserResponsedata
import com.shanttiy.application.responsedata.propertydata.FullUserPropertydataFactory
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/me")
class MeController(
    @Autowired
    private val userUsecaseBoundary: UserUsecaseBoundary,
    @Autowired
    private val fullUserPropertydataFactory: FullUserPropertydataFactory
){
    @GetMapping("")
    fun getMyInformation(
        @RequestHeader("uid") uniqueId: String
    ): UserResponsedata{
        val user = userUsecaseBoundary.findUserByUniqueId(uniqueId)
        val userPropertydata = fullUserPropertydataFactory.construct(user)
        return UserResponsedata(userPropertydata)
    }
}