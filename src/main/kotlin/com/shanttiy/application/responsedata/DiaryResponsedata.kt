package com.shanttiy.application.responsedata

import com.shanttiy.application.responsedata.propertydata.DiaryPropertydata
import java.time.LocalDate

data class DiaryResponsedata(
    val date: LocalDate,
    val diary: DiaryPropertydata
)