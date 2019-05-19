package com.shanttiy.framework.database.dao;

import com.shanttiy.framework.database.entity.TeamDomaEntity;
import org.seasar.doma.Dao;
import org.seasar.doma.Select;
import org.seasar.doma.boot.ConfigAutowireable;

import java.util.List;

@Dao
@ConfigAutowireable
public interface TeamDomaDao {
    @Select
    public List<TeamDomaEntity> selectTeamsByUserId(Integer userId);

    @Select
    public TeamDomaEntity selectTeamById(Integer teamId);

    @Select
    public TeamDomaEntity selectTeamByDomain(String teamDomain);

    @Select
    public TeamDomaEntity selectTeamByTagId(Integer tagId);
}
