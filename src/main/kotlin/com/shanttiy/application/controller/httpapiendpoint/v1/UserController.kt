package com.shanttiy.application.controller.httpapiendpoint.v1

import com.shanttiy.application.responsedata.UsersResponsedata
import com.shanttiy.application.responsedata.propertydata.FullUserPropertydataFactory
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/users")
class UserController(
    @Autowired
    private val userUsecaseBoundary: UserUsecaseBoundary,
    @Autowired
    private val fullUserPropertydataFactory: FullUserPropertydataFactory
){
    @GetMapping("/{teamId}")
    fun getAllUsers(
        @PathVariable("teamId") teamId: Int
    ): UsersResponsedata{
        val users = userUsecaseBoundary.findAllUsers()
        val userPropertydatas = users.map { user -> fullUserPropertydataFactory.construct(user) }
        return UsersResponsedata(userPropertydatas)
    }
}