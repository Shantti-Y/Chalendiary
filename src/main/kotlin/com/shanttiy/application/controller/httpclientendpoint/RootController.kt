package com.shanttiy.infrastructure.config.application

import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping

@Controller
@RequestMapping("")
class RootController(
    @Autowired
    private val userUsecaseBoundary: UserUsecaseBoundary
) {
    @GetMapping("")
    fun index(
        // @RequestHeader("uid") uniqueId: String, TODO: Add header when authorization system is built
    ): String{
        //val user = userUsecaseBoundary.getCurrentUser(uniqueId)
        //teamUsecaseBoundary.getTeamByDomain(teamDomain, user)
        return "index"
    }

    @GetMapping("/login")
    fun login(
    ): String{
        return "index"
    }
}