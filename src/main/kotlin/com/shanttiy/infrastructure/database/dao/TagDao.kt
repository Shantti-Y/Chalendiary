package com.shanttiy.infrastructure.database.dao;

import com.shanttiy.infrastructure.database.entity.TagEntity;
import org.seasar.doma.*
import org.seasar.doma.boot.ConfigAutowireable;
import org.seasar.doma.jdbc.Result

@Dao
@ConfigAutowireable
interface TagDao {
    @Select
    fun selectByUserId(userId: Int): List<TagEntity>

    @Select
    fun selectById(tagId: Int): TagEntity?

    @Insert
    fun insert(tagEntity: TagEntity): Result<TagEntity>

    @Update(sqlFile = true)
    fun update(tagEntity: TagEntity): Result<TagEntity>

    @Delete
    fun delete(tagEntity: TagEntity): Result<TagEntity>
}
