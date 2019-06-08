package com.shanttiy.application.controller.websocketapiendpoint.v1

import com.shanttiy.application.requestdata.OnlyIdRequestdata
import com.shanttiy.application.requestdata.TagRequestdata
import com.shanttiy.application.requestdata.UserRequestdata
import com.shanttiy.application.requestdata.propertydata.TagPropertydataAdapter
import com.shanttiy.application.requestdata.propertydata.UserPropertydataAdapter
import com.shanttiy.application.responsedata.TagResponsedata
import com.shanttiy.application.responsedata.UserResponsedata
import com.shanttiy.application.responsedata.propertydata.FullTagPropertydataFactory
import com.shanttiy.application.responsedata.propertydata.FullUserPropertydataFactory
import com.shanttiy.application.usecaseboundary.TagUsecaseBoundary
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.stereotype.Controller
import org.springframework.transaction.annotation.Transactional

@Controller
class UserWebSocketV1Controller(
    @Autowired
    private val userUsecaseBoundary: UserUsecaseBoundary,
    @Autowired
    private val userPropertydataAdapter: UserPropertydataAdapter,
    @Autowired
    private val fullUserPropertydataFactory: FullUserPropertydataFactory

){
    @MessageMapping("/users/edit")
    @SendTo("/socket/users/edit")
    @Transactional
    fun putUser(userRequestdata: UserRequestdata): UserResponsedata {
        val userData = userPropertydataAdapter.construct(userRequestdata.user)
        val updatedUser = userUsecaseBoundary.patchUser(userData)

        return UserResponsedata(fullUserPropertydataFactory.construct(updatedUser))
    }

    @MessageMapping("/users/destroy")
    @SendTo("/socket/users/destroy")
    @Transactional
    fun deleteUser(onlyIdRequestdata: OnlyIdRequestdata): UserResponsedata {
        val userId = onlyIdRequestdata.id
        val deletedUser = userUsecaseBoundary.deleteUser(userId)

        return UserResponsedata(fullUserPropertydataFactory.construct(deletedUser))
    }
}