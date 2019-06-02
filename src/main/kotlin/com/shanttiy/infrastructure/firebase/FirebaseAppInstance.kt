package com.shanttiy.infrastructure.firebase

import com.google.auth.oauth2.GoogleCredentials
import com.google.firebase.FirebaseApp
import com.google.firebase.FirebaseOptions
import com.google.firebase.auth.FirebaseAuth

class FirebaseAppInstance {
    companion object {
        private val singletonInstance: FirebaseApp = FirebaseApp
            .initializeApp(FirebaseOptions.Builder()
            .setCredentials(GoogleCredentials.getApplicationDefault())
            .setDatabaseUrl("https://niko-chalendiary.firebaseio.com")
            .build())

        fun app(): FirebaseApp {
            return FirebaseApp.getInstance()
        }

        fun auth(): FirebaseAuth {
            return FirebaseAuth.getInstance(app())
        }
    }
}