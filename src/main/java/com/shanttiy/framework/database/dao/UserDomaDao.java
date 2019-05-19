package com.shanttiy.framework.database.dao;

import com.shanttiy.framework.database.entity.TagDomaEntity;
import com.shanttiy.framework.database.entity.UserDomaEntity;
import org.seasar.doma.Dao;
import org.seasar.doma.Select;
import org.seasar.doma.boot.ConfigAutowireable;

import java.util.List;

@Dao
@ConfigAutowireable
public interface UserDomaDao {
    @Select
    UserDomaEntity selectUserById(Integer userId);

    @Select
    List<UserDomaEntity> selectUsersByTeamId(Integer teamId);

    @Select
    List<UserDomaEntity> selectUsersByTagId(Integer tagId);

    @Select
    UserDomaEntity selectUserByUniqueId(String uniqueId);
}