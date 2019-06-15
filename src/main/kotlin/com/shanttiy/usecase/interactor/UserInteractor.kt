package com.shanttiy.usecase.interactor

import com.google.firebase.auth.UserRecord
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import com.shanttiy.domain.model.User
import com.shanttiy.infrastructure.firebase.FirebaseAppInstance
import com.shanttiy.usecase.exception.AccessForbiddenException
import com.shanttiy.usecase.exception.RecordNotfoundException
import com.shanttiy.usecase.infrastructureboundary.FirebaseUserInfrastructureBoundary
import com.shanttiy.usecase.infrastructureboundary.UserInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.crossstore.ChangeSetPersister
import org.springframework.stereotype.Service
import java.lang.IllegalArgumentException
import java.security.InvalidParameterException

@Service
class UserInteractor(
    @Autowired
    private val userInfrastructureBoundary: UserInfrastructureBoundary,
    @Autowired
    private val firebaseUserInfrastructureBoundary: FirebaseUserInfrastructureBoundary
): UserUsecaseBoundary{
    override fun findAllUsers(): List<User> {
        return userInfrastructureBoundary.selectAllUsers()
    }

    override fun findUserById(userId: Int?): User {
        if (userId === null) throw InvalidParameterException()
        val user = userInfrastructureBoundary.selectUserById(userId)
        if(user != null) return user else throw RecordNotfoundException()
    }

    override fun findUserByToken(authorization: String): User {
        try {
            val token = authorization.substring("Bearer".length).trim()
            val uniqueId = firebaseUserInfrastructureBoundary.getVerifiedUniqueId(token)
            val user = userInfrastructureBoundary.selectUserByUniqueId(uniqueId)
            if(user != null) return user else throw AccessForbiddenException() // TODO: Authはあるがユーザがない場合は403以外のステータスを返す
        } catch(e: IllegalArgumentException) {
            throw AccessForbiddenException()
        }
    }

    override fun findUsersByTagId(tagId: Int?): List<User> {
        if (tagId === null) throw InvalidParameterException()
        return userInfrastructureBoundary.selectUserByTagId(tagId)
    }

    override fun authenticateUser(authorization: String): String {
        try {
            val token = authorization.substring("Bearer".length).trim()
            val uniqueId = firebaseUserInfrastructureBoundary.getVerifiedUniqueId(token)
            val userFromFirebase = firebaseUserInfrastructureBoundary.selectUser(uniqueId)

            if(userInfrastructureBoundary.selectUserByUniqueId(uniqueId) == null){
                firebaseUserInfrastructureBoundary.updateUserDisabled(token, true)
                userInfrastructureBoundary.createUser(userFromFirebase)
            }

            return firebaseUserInfrastructureBoundary.getCustomToken(uniqueId)
        } catch(e: IllegalArgumentException) {
            throw AccessForbiddenException()
        }
    }

    // TODO: add authentication for preventing from a user updating another one's profile
    override fun patchUser(user: User): User {
        val searchedUser = userInfrastructureBoundary.selectUserById(user.id!!)
        if (searchedUser != null) {
            firebaseUserInfrastructureBoundary.updateUser(user)
            return userInfrastructureBoundary.updateUser(user)
        } else {
            throw InvalidParameterException()
        }
    }

    override fun deleteUser(userId: Int): User {
        val searchedUser = userInfrastructureBoundary.selectUserById(userId)
        if (searchedUser != null) {
            firebaseUserInfrastructureBoundary.deleteUser(searchedUser)
            return userInfrastructureBoundary.deleteUser(searchedUser)
        } else {
            throw InvalidParameterException()
        }
    }
}