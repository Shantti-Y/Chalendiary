package com.shanttiy.application.responsedata

import com.shanttiy.application.responsedata.propertydata.FullUserPropertydata
import com.shanttiy.application.responsedata.propertydata.SimplifiedUserPropertydata


data class FullUserResponsedata(
    val user: FullUserPropertydata
)

data class SimplifiedUserResponsedata(
    val user: SimplifiedUserPropertydata
)