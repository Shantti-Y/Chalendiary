package com.shanttiy.infrastructure.database.dao;

import com.shanttiy.infrastructure.database.entity.ReplyEntity;
import org.seasar.doma.Dao;
import org.seasar.doma.Select;
import org.seasar.doma.boot.ConfigAutowireable;

@Dao
@ConfigAutowireable
interface ReplyDao {
    @Select
    fun selectByDiaryId(diaryId: Int):  List<ReplyEntity>;
}
