package com.shanttiy.application.responsedata

data class DiariesInMonthResponsedata(
    val year: Int,
    val month: Int,
    val items: List<DiariesInDayResponsedata>
)