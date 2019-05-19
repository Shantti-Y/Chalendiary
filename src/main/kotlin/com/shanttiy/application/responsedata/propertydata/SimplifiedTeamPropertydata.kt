package com.shanttiy.application.responsedata.propertydata

import com.shanttiy.domain.model.Team
import org.springframework.stereotype.Component
import java.time.LocalDateTime

data class SimplifiedTeamPropertydata(
    val id: Int?,
    val name: String,
    val domain: String,
    val thumbnailPath: String,
    val description: String,
    val createdAt: LocalDateTime?,
    val updatedAt: LocalDateTime?
)

@Component
class SimplifiedTeamPropertydataFactory{
    fun construct(team: Team): SimplifiedTeamPropertydata{
        return SimplifiedTeamPropertydata(
            id = team.id,
            name = team.name,
            domain = team.domain,
            thumbnailPath = team.thumbnailPath,
            description = team.description,
            createdAt = team.createdAt,
            updatedAt = team.updatedAt
        )
    }
}