package com.shanttiy.application.requestdata.propertydata

import com.shanttiy.domain.model.Tag
import org.springframework.stereotype.Component
import java.io.Serializable

data class TagPropertydata(
    val id: Int?,
    val name: String,
    val ownerUserId: Int,
    val publicFlag: Boolean
): Serializable

@Component
class TagPropertydataAdapter {
    fun construct(tagPropertydata: TagPropertydata): Tag {
        return Tag(
            id = tagPropertydata.id,
            name = tagPropertydata.name,
            ownerUserId = tagPropertydata.ownerUserId,
            publicFlag = tagPropertydata.publicFlag,
            createdAt = null,
            updatedAt = null
        )
    }
}