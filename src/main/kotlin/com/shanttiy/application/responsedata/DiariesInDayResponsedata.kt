package com.shanttiy.application.responsedata

import com.shanttiy.application.responsedata.propertydata.DiaryPropertydata
import java.time.LocalDate

data class DiariesInDayResponsedata(
    val date: LocalDate,
    val diaries: List<DiaryPropertydata>
)