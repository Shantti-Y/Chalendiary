package com.shanttiy.infrastructure.database.dao;

import com.shanttiy.infrastructure.database.entity.DiaryEntity;
import org.seasar.doma.*
import org.seasar.doma.boot.ConfigAutowireable;
import org.seasar.doma.jdbc.Result;

import java.sql.Date;

@Dao
@ConfigAutowireable
interface DiaryDao {

    @Select
    fun selectByDateInRange(from: Date, to: Date): List<DiaryEntity>

    @Select
    fun selectById(diaryId: Int): DiaryEntity?

    @Select
    fun selectByUserIdAndPostedAt(userId: Int, postedAt: Date): DiaryEntity?

    @Insert
    fun insert(diaryEntity: DiaryEntity): Result<DiaryEntity>

    @Update(sqlFile = true)
    fun update(diaryEntity: DiaryEntity): Result<DiaryEntity>

    @Delete(sqlFile = true)
    fun delete(diaryEntity: DiaryEntity): Result<DiaryEntity>
}
