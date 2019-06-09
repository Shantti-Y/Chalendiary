package com.shanttiy.infrastructure.database.dao;

import com.shanttiy.infrastructure.database.entity.UserEntity;
import org.seasar.doma.*
import org.seasar.doma.boot.ConfigAutowireable;
import org.seasar.doma.jdbc.Result

@Dao
@ConfigAutowireable
interface UserDao {
    @Select
    fun selectAll(): List<UserEntity>

    @Select
    fun selectById(userId: Int): UserEntity?

    @Select
    fun selectByUniqueId(uniqueId: String): UserEntity?

    @Select
    fun selectByTagId(tagId: Int): List<UserEntity>

    @Insert
    fun insert(userEntity: UserEntity): Result<UserEntity>

    @Update(sqlFile = true)
    fun update(userEntity: UserEntity): Result<UserEntity>

    @Delete
    fun delete(userEntity: UserEntity): Result<UserEntity>
}