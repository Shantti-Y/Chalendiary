package com.shanttiy.infrastructure.database.dao;

import com.shanttiy.infrastructure.database.entity.ReplyEntity;
import org.seasar.doma.*
import org.seasar.doma.boot.ConfigAutowireable;
import org.seasar.doma.jdbc.Result

@Dao
@ConfigAutowireable
interface ReplyDao {
    @Select
    fun selectByDiaryId(diaryId: Int):  List<ReplyEntity>

    @Select
    fun selectById(replyId: Int): ReplyEntity

    @Insert
    fun insert(replyEntity: ReplyEntity): Result<ReplyEntity>

    @Update(sqlFile = true)
    fun update(replyEntity: ReplyEntity): Result<ReplyEntity>

    @Delete
    fun delete(replyEntity: ReplyEntity): Result<ReplyEntity>
}
