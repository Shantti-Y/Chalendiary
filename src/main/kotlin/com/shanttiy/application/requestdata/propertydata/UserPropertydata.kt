package com.shanttiy.application.requestdata.propertydata

import com.shanttiy.domain.model.Tag
import com.shanttiy.domain.model.User
import org.springframework.stereotype.Component
import java.io.Serializable

data class UserPropertydata(
    val id: Int?,
    val screenName: String,
    val email: String,
    val thumbnailPath: String,
    val phone: String,
    val uniqueId: String
): Serializable

@Component
class UserPropertydataAdapter {
    fun construct(userPropertydata: UserPropertydata): User {
        return User(
            id = userPropertydata.id,
            screenName = userPropertydata.screenName,
            email = userPropertydata.email,
            thumbnailPath = userPropertydata.thumbnailPath,
            phone = userPropertydata.phone,
            uniqueId = userPropertydata.uniqueId,
            createdAt = null,
            updatedAt = null
        )
    }
}