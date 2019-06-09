package com.shanttiy.application.responsedata

import com.shanttiy.application.responsedata.propertydata.FullUserPropertydata
import com.shanttiy.application.responsedata.propertydata.SimplifiedUserPropertydata


data class FullUsersResponsedata(
    val users: List<FullUserPropertydata>
)

data class SimplifiedUsersResponsedata(
    val users: List<SimplifiedUserPropertydata>
)