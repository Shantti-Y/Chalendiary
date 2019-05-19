package com.shanttiy.infrastructure.database.dao;

import com.shanttiy.infrastructure.database.entity.TagEntity;
import org.seasar.doma.Dao;
import org.seasar.doma.Select;
import org.seasar.doma.boot.ConfigAutowireable;

@Dao
@ConfigAutowireable
interface TagDao {
    @Select
    fun selectByUserId(userId: Int): List<TagEntity>
}
