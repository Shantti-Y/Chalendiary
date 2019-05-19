package com.shanttiy.application.controller.httpapiendpoint.v1

import com.shanttiy.application.responsedata.TeamResponsedata
import com.shanttiy.application.responsedata.TeamsResponsedata
import com.shanttiy.application.responsedata.propertydata.FullTeamPropertydataFactory
import com.shanttiy.application.usecaseboundary.TeamUsecaseBoundary
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/v1/teams")
class TeamController(
    @Autowired
    private val teamUsecaseBoundary: TeamUsecaseBoundary,
    @Autowired
    private val userUsecaseBoundary: UserUsecaseBoundary,
    @Autowired
    private val fullTeamPropertydataFactory: FullTeamPropertydataFactory
){
    @GetMapping("/me")
    fun getMyTeams(
        @RequestHeader("uid") uniqueId: String
    ): TeamsResponsedata{
        val user = userUsecaseBoundary.getCurrentUser(uniqueId)
        // TODO: argument should be nullable and throw an error in usecase if id is null
        val teams = teamUsecaseBoundary.getTeamsByUserId(user.id)
        val teamPropertydatas = teams.map { team -> fullTeamPropertydataFactory.construct(team) }
        return TeamsResponsedata(teamPropertydatas)
    }

    @GetMapping("/{teamId}")
    fun getTeamById(
        @RequestHeader("uid") uniqueId: String,
        @PathVariable("teamId") teamId: Int
    ): TeamResponsedata{
        val user = userUsecaseBoundary.getCurrentUser(uniqueId)

        val team = teamUsecaseBoundary.getTeamById(teamId)
        val teamPropertydata = fullTeamPropertydataFactory.construct(team)
        return TeamResponsedata(teamPropertydata)
    }
}