package com.shanttiy.usecase.interactor

import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import com.shanttiy.domain.model.User
import com.shanttiy.usecase.infrastructureboundary.UserInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.security.InvalidParameterException

@Service
class UserInteractor(
    @Autowired
    private val userInfrastructureBoundary: UserInfrastructureBoundary
): UserUsecaseBoundary{
    override fun getUserById(userId: Int?): User {
        if (userId === null) throw InvalidParameterException()
        return userInfrastructureBoundary.selectUserById(userId)
    }

    override fun getCurrentUser(uniqueId: String): User {
        return userInfrastructureBoundary.selectUserByUniqueId(uniqueId)
    }

    override fun getUsersByTeamId(teamId: Int?): List<User> {
        if (teamId === null) throw InvalidParameterException()
        return userInfrastructureBoundary.selectUsersByTeamId(teamId)
    }

    override fun getUsersByTagId(tagId: Int?): List<User> {
        if (tagId === null) throw InvalidParameterException()
        return userInfrastructureBoundary.selectUsersByTagId(tagId)
    }
}