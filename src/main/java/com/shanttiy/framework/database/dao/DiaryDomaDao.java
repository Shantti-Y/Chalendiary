package com.shanttiy.framework.database.dao;

import com.shanttiy.framework.database.entity.DiaryDomaEntity;
import org.seasar.doma.Dao;
import org.seasar.doma.Insert;
import org.seasar.doma.Select;
import org.seasar.doma.boot.ConfigAutowireable;
import org.seasar.doma.jdbc.Result;

import java.sql.Date;
import java.util.List;

@Dao
@ConfigAutowireable
public interface DiaryDomaDao {

    @Select
    List<DiaryDomaEntity> selectDiariesInCondition(Integer teamId, Date date);

    @Insert
    Result<DiaryDomaEntity> insertDiary(DiaryDomaEntity diaryEntity);
}
