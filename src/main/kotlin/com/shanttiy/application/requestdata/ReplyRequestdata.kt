package com.shanttiy.application.requestdata

import com.shanttiy.application.requestdata.propertydata.ReplyPropertydata
import java.io.Serializable

data class ReplyRequestdata(
    val reply: ReplyPropertydata
): Serializable