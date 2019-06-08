package com.shanttiy.application.responsedata.propertydata

import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import com.shanttiy.domain.model.Tag
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.time.LocalDateTime

data class FullTagPropertydata(
    val id: Int?,
    val name: String,
    val ownerUser: SimplifiedUserPropertydata,
    val publicFlag: Boolean,
    val createdAt: LocalDateTime?,
    val updatedAt: LocalDateTime?,
    val users: List<SimplifiedUserPropertydata>
)

@Component
class FullTagPropertydataFactory(
    @Autowired
    private val userUsecaseBoundary: UserUsecaseBoundary,
    @Autowired
    private val simplifiedUserPropertydataFactory: SimplifiedUserPropertydataFactory
){
    fun construct(tag: Tag): FullTagPropertydata{
        val users = userUsecaseBoundary.findUsersByTagId(tag.id)
        val ownerUser = users.find { it.id === tag.ownerUserId } ?: userUsecaseBoundary.findUserById(tag.ownerUserId)
        return FullTagPropertydata(
            id = tag.id,
            name = tag.name,
            ownerUser = simplifiedUserPropertydataFactory.construct(ownerUser),
            publicFlag = tag.publicFlag,
            createdAt = tag.createdAt,
            updatedAt = tag.updatedAt,
            users = users.map { simplifiedUserPropertydataFactory.construct(it) }
        )
    }
}