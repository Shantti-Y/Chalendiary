package com.shanttiy.application.responsedata

import com.shanttiy.application.responsedata.propertydata.DiaryPropertydata
import com.shanttiy.application.responsedata.propertydata.ReplyPropertydata

data class ReplyResponsedata(
    val diary: DiaryPropertydata,
    val reply: ReplyPropertydata
)