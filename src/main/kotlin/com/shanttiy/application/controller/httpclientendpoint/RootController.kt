package com.shanttiy.infrastructure.config.application

import com.shanttiy.application.responsedata.TagsResponsedata
import com.shanttiy.application.usecaseboundary.TeamUsecaseBoundary
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.*

@Controller
@RequestMapping("")
class RootController(
    @Autowired
    private val userUsecaseBoundary: UserUsecaseBoundary,
    @Autowired
    private val teamUsecaseBoundary: TeamUsecaseBoundary
) {
    @GetMapping("/teams/{teamDomain}")
    fun index(
        // @RequestHeader("uid") uniqueId: String, TODO: Add header when authorization system is built
        @PathVariable("teamDomain") teamDomain: String
    ): String{
        //val user = userUsecaseBoundary.getCurrentUser(uniqueId)
        //teamUsecaseBoundary.getTeamByDomain(teamDomain, user)
        return "index"
    }
}