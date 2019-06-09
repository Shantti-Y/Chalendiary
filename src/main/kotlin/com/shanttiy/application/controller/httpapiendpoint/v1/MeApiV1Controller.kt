package com.shanttiy.application.controller.httpapiendpoint.v1

import com.shanttiy.application.requestdata.CredentialRequestdata
import com.shanttiy.application.responsedata.FullUserResponsedata
import com.shanttiy.application.responsedata.TokenResponsedata
import com.shanttiy.application.responsedata.propertydata.FullUserPropertydataFactory
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/v1/me")
class MeApiV1Controller(
    @Autowired
    private val userUsecaseBoundary: UserUsecaseBoundary,
    @Autowired
    private val fullUserPropertydataFactory: FullUserPropertydataFactory
){
    @GetMapping("")
    fun getMyInformation(
        @RequestHeader("Authorization") authorization: String
    ): FullUserResponsedata{
        val user = userUsecaseBoundary.findUserByToken(authorization)
        val userPropertydata = fullUserPropertydataFactory.construct(user)
        return FullUserResponsedata(userPropertydata)
    }

    @PostMapping("/signin")
    fun signinUser(
        @RequestHeader("Authorization") authorization: String
    ): TokenResponsedata {
        val generatedToken = userUsecaseBoundary.authenticateUser(authorization)

        return TokenResponsedata(generatedToken)
    }
}