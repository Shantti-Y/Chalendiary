package com.shanttiy.infrastructure.firebase

import com.google.firebase.auth.UserRecord
import com.shanttiy.domain.model.User
import com.shanttiy.usecase.infrastructureboundary.FirebaseUserInfrastructureBoundary
import org.springframework.stereotype.Component

@Component
class FirebaseUserManager: FirebaseUserInfrastructureBoundary{

    override fun getVerifiedUniqueId(authorizationToken: String): String {
        val decodedToken = FirebaseAppInstance.auth().verifyIdToken(authorizationToken)
        return decodedToken.uid
    }

    override fun selectUser(uniqueId: String): User {
        val userRecord = FirebaseAppInstance.auth().getUser(uniqueId)
        return mapRecordToUserDomain(userRecord)
    }

    override fun getCustomToken(uniqueId: String): String {
        return FirebaseAppInstance.auth().createCustomToken(uniqueId)
    }

    override fun updateUserDisabled(authorizationToken: String, disabled: Boolean): User {
        val decodedToken = FirebaseAppInstance.auth().verifyIdToken(authorizationToken)

        var request = UserRecord.UpdateRequest(decodedToken.uid)
            .setDisabled(true)

        val userRecord = FirebaseAppInstance.auth().updateUser(request)

        return mapRecordToUserDomain(userRecord)
    }

    override fun updateUser(user: User): String {
        val request = UserRecord.UpdateRequest(user.uniqueId)
            .setEmail(user.email)
            .setPhoneNumber(user.phone)
            .setDisplayName(user.screenName)
            .setPhotoUrl(user.thumbnailPath)

        val userRecord = FirebaseAppInstance.auth().updateUser(request)
        return userRecord.uid
    }

//    override fun deleteUser(user: User): User {
//
//    }

    private fun mapRecordToUserDomain(record: UserRecord): User {
        return User(
            id = null,
            screenName = record.displayName,
            email = record.email,
            thumbnailPath = record.photoUrl,
            uniqueId = record.uid,
            phone = record.phoneNumber,
            createdAt = null,
            updatedAt = null
        )
    }
}