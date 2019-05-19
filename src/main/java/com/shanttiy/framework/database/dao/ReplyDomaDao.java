package com.shanttiy.framework.database.dao;

import com.shanttiy.framework.database.entity.ReplyDomaEntity;
import org.seasar.doma.Dao;
import org.seasar.doma.Select;
import org.seasar.doma.boot.ConfigAutowireable;

import java.util.List;

@Dao
@ConfigAutowireable
public interface ReplyDomaDao {
    @Select
    List<ReplyDomaEntity> selectRepliesByDiaryId(Integer diaryId);
}
