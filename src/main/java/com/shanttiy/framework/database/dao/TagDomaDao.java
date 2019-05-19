package com.shanttiy.framework.database.dao;

import com.shanttiy.framework.database.entity.TagDomaEntity;
import com.shanttiy.framework.database.entity.TeamDomaEntity;
import org.seasar.doma.Dao;
import org.seasar.doma.Select;
import org.seasar.doma.boot.ConfigAutowireable;

import java.util.List;

@Dao
@ConfigAutowireable
public interface TagDomaDao {
    @Select
    List<TagDomaEntity> selectTagsByUserId(Integer userId);

    @Select
    List<TagDomaEntity> selectTagsByTeamId(Integer teamId);
}
