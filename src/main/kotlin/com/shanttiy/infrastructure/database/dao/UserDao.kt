package com.shanttiy.infrastructure.database.dao;

import com.shanttiy.infrastructure.database.entity.UserEntity;
import org.seasar.doma.Dao;
import org.seasar.doma.Select;
import org.seasar.doma.boot.ConfigAutowireable;

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
}