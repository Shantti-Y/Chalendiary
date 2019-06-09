package com.shanttiy.application.controller.httpapiendpoint.v1

import com.shanttiy.application.requestdata.CredentialRequestdata
import com.shanttiy.application.responsedata.SimplifiedUserResponsedata
import com.shanttiy.application.responsedata.FullUsersResponsedata
import com.shanttiy.application.responsedata.SimplifiedUsersResponsedata
import com.shanttiy.application.responsedata.TokenResponsedata
import com.shanttiy.application.responsedata.propertydata.FullUserPropertydataFactory
import com.shanttiy.application.responsedata.propertydata.SimplifiedUserPropertydataFactory
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/v1/users")
class UserApiV1Controller(
    @Autowired
    private val userUsecaseBoundary: UserUsecaseBoundary,
    @Autowired
    private val fullUserPropertydataFactory: FullUserPropertydataFactory,
    @Autowired
    private val simplifiedUserPropertydataFactory: SimplifiedUserPropertydataFactory
){
    @GetMapping("")
    fun getConfirmedUsers(
        @RequestHeader("Authorization") authorization: String
    ): FullUsersResponsedata{
        val user = userUsecaseBoundary.findUserByToken(authorization)
        val users = userUsecaseBoundary.findAllUsers()
        val userPropertydatas = users.map { user -> fullUserPropertydataFactory.construct(user) }
        return FullUsersResponsedata(userPropertydatas)
    }

}