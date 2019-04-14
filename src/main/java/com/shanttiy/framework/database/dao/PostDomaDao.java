package com.shanttiy.framework.database.dao;

import com.shanttiy.framework.database.entity.PostDomaEntity;
import org.seasar.doma.Dao;
import org.seasar.doma.Insert;
import org.seasar.doma.Select;
import org.seasar.doma.boot.ConfigAutowireable;

import org.seasar.doma.jdbc.Result;
import java.util.List;

@Dao
@ConfigAutowireable
public interface PostDomaDao {
    @Insert(sqlFile = true)
    Result<PostDomaEntity> insert(PostDomaEntity post);

    @Select
    List<PostDomaEntity> select();
}

