package com.shanttiy.application.responsedata.propertydata

import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import com.shanttiy.domain.model.Reply
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.time.LocalDateTime

class ReplyPropertydata(
    val id: Int?,
    val user: SimplifiedUserPropertydata,
    val contentText: String,
    val createdAt: LocalDateTime?,
    val updatedAt: LocalDateTime?
)

@Component
class ReplyPropertydataFactory(
    @Autowired
    private val userUsecaseBoundary: UserUsecaseBoundary,
    @Autowired
    private val userPropertydataFactory: SimplifiedUserPropertydataFactory
){
    fun construct(reply: Reply): ReplyPropertydata{
        val user = userUsecaseBoundary.findUserById(reply.userId)
        return ReplyPropertydata(
            id = reply.id,
            user = userPropertydataFactory.construct(user),
            contentText = reply.contentText,
            createdAt = reply.createdAt,
            updatedAt = reply.updatedAt
        )
    }
}