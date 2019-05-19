package com.shanttiy.infrastructure.dataaccess.entitymappertodomain

import com.shanttiy.domain.model.User
import com.shanttiy.framework.database.dao.TagDomaDao
import com.shanttiy.framework.database.dao.TeamDomaDao
import com.shanttiy.framework.database.entity.UserDomaEntity
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class UserEntityMapperToDomain(
){
    fun mapEntityToDomain(userEntity: UserDomaEntity): User{
        return User(
            id = userEntity.id,
            uniqueId = userEntity.uniqueId,
            screenName = userEntity.screenName,
            email = userEntity.email,
            thumbnailPath = userEntity.thumbnailPath,
            phone = userEntity.phone,
            createdAt = userEntity.createdAt?.toLocalDateTime(),
            updatedAt = userEntity.updatedAt?.toLocalDateTime()
        )
    }
}