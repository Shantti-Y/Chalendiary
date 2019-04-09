package com.shanttiy.framework.database.dao;

import com.shanttiy.framework.database.entity.UserDomaEntity;
import org.seasar.doma.Dao;
import org.seasar.doma.Select;
import org.seasar.doma.boot.ConfigAutowireable;

import java.util.List;

@Dao
@ConfigAutowireable
public interface UsersDomaDao {
    @Select
    public List<UserDomaEntity> selectSomething();
}

