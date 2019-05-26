package com.shanttiy.application.responsedata.propertydata

import com.shanttiy.domain.model.User
import org.springframework.stereotype.Component
import java.time.LocalDateTime

data class SimplifiedUserPropertydata(
    val id: Int?,
    val screenName: String,
    val email: String,
    val thumbnailPath: String,
    val phone: String?,
    val uniqueId: String,
    val createdAt: LocalDateTime?,
    val updatedAt: LocalDateTime?
)

@Component
class SimplifiedUserPropertydataFactory{
    fun construct(user: User): SimplifiedUserPropertydata{
        return SimplifiedUserPropertydata(
            id = user.id,
            screenName = user.screenName,
            email = user.email,
            thumbnailPath = user.thumbnailPath,
            phone = user.phone,
            uniqueId = user.uniqueId,
            createdAt = user.createdAt,
            updatedAt = user.updatedAt
        )
    }
}