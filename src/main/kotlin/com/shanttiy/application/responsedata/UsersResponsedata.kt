package com.shanttiy.application.responsedata

import com.shanttiy.application.responsedata.propertydata.FullUserPropertydata


data class UsersResponsedata(
    val users: List<FullUserPropertydata>
)