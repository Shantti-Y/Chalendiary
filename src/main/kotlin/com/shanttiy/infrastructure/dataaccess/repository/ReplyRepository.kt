package com.shanttiy.infrastructure.dataaccess.repository

import com.shanttiy.domain.model.Reply
import com.shanttiy.framework.database.dao.ReplyDomaDao
import com.shanttiy.infrastructure.dataaccess.entitymappertodomain.ReplyEntityMapperToDomain
import com.shanttiy.usecase.infrastructureboundary.ReplyInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository

@Repository
class ReplyRepository(
    @Autowired
    private val replyDomaDao: ReplyDomaDao,
    @Autowired
    private val replyEntityMapperToDomain: ReplyEntityMapperToDomain
): ReplyInfrastructureBoundary{
    override fun selectRepliesByDiaryId(diaryId: Int): List<Reply> {
        val replyEntities = replyDomaDao.selectRepliesByDiaryId(diaryId)
        return replyEntities.map { replyEntity ->
            replyEntityMapperToDomain.mapEntityToDomain(replyEntity)
        }
    }
}