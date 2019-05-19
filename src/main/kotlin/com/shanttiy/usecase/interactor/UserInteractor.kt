package com.shanttiy.usecase.interactor

import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import com.shanttiy.domain.model.User
import com.shanttiy.usecase.exception.RecordNotfoundException
import com.shanttiy.usecase.infrastructureboundary.UserInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.crossstore.ChangeSetPersister
import org.springframework.stereotype.Service
import java.security.InvalidParameterException

@Service
class UserInteractor(
    @Autowired
    private val userInfrastructureBoundary: UserInfrastructureBoundary
): UserUsecaseBoundary{
    override fun findAllUsers(): List<User> {
        return userInfrastructureBoundary.selectAllUsers()
    }
    override fun findUserById(userId: Int?): User {
        if (userId === null) throw InvalidParameterException()
        val user = userInfrastructureBoundary.selectUserById(userId)
        if(user != null) return user else throw RecordNotfoundException()
    }

    override fun findUserByUniqueId(uniqueId: String?): User {
        if (uniqueId === null) throw InvalidParameterException()
        val user = userInfrastructureBoundary.selectUserByUniqueId(uniqueId)
        if(user != null) return user else throw RecordNotfoundException()
    }

    override fun findUsersByTagId(tagId: Int?): List<User> {
        if (tagId === null) throw InvalidParameterException()
        return userInfrastructureBoundary.selectUserByTagId(tagId)
    }
}