package com.shanttiy.application.requestdata

import com.shanttiy.application.requestdata.propertydata.TagPropertydata
import java.io.Serializable

data class TagRequestdata(
    val tag: TagPropertydata,
    val userIds: List<Int>
): Serializable