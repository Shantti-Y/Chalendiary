package com.shanttiy.application.requestdata

import com.shanttiy.application.requestdata.propertydata.DiaryPropertydata
import java.io.Serializable

data class DiaryRequestdata(
    val diary: DiaryPropertydata
): Serializable