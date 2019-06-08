package com.shanttiy.application.requestdata

import com.shanttiy.application.requestdata.propertydata.UserPropertydata
import java.io.Serializable


data class UserRequestdata(
    val user: UserPropertydata
): Serializable