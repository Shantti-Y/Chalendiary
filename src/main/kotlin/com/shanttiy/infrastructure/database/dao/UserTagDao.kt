package com.shanttiy.infrastructure.database.dao

import com.shanttiy.infrastructure.database.entity.UserTagEntity;
import org.seasar.doma.Dao;
import org.seasar.doma.Delete
import org.seasar.doma.Insert
import org.seasar.doma.Select;
import org.seasar.doma.boot.ConfigAutowireable;
import org.seasar.doma.jdbc.Result

@Dao
@ConfigAutowireable
interface UserTagDao {
    @Select
    fun selectByTagId(tagId: Int): List<UserTagEntity>

    @Select
    fun selectByUserId(userId: Int): List<UserTagEntity>

    @Insert
    fun insert(userTagEntity: UserTagEntity): Result<UserTagEntity>

    @Delete(sqlFile = true)
    fun delete(userTagEntity: UserTagEntity): Result<UserTagEntity>
}