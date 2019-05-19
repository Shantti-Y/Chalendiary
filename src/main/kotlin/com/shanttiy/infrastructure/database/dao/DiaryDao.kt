package com.shanttiy.infrastructure.database.dao;

import com.shanttiy.infrastructure.database.entity.DiaryEntity;
import org.seasar.doma.Dao;
import org.seasar.doma.Insert;
import org.seasar.doma.Select;
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

    @Insert
    fun insert(diaryEntity: DiaryEntity): Result<DiaryEntity>
}
