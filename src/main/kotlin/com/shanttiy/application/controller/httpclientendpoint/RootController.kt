package com.shanttiy.infrastructure.config.application

import com.google.auth.oauth2.GoogleCredentials
import com.google.firebase.FirebaseOptions
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.core.env.Environment
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import com.google.firebase.FirebaseApp
import java.io.FileInputStream

@Controller
@RequestMapping("")
class RootController(
    @Autowired
    private val userUsecaseBoundary: UserUsecaseBoundary,
    @Autowired
    private val environment: Environment
) {
    // TODO: Enable security to reject no-logged user
    @GetMapping("")
    fun index(): String{
        //val user = userUsecaseBoundary.getCurrentUser(uniqueId)
        //teamUsecaseBoundary.getTeamByDomain(teamDomain, user)
        return "index"
    }

    @GetMapping("/signin")
    fun signin(): String{
        return "index"
    }
}