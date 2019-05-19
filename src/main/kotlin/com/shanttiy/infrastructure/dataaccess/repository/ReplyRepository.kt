package com.shanttiy.infrastructure.dataaccess.repository

import com.shanttiy.domain.model.Reply
import com.shanttiy.infrastructure.database.dao.ReplyDao
import com.shanttiy.infrastructure.dataaccess.objectmapper.ReplyObjectMapper
import com.shanttiy.usecase.infrastructureboundary.ReplyInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository

@Repository
class ReplyRepository(
    @Autowired
    private val replyDao: ReplyDao,
    @Autowired
    private val replyObjectMapper: ReplyObjectMapper
): ReplyInfrastructureBoundary{
    override fun selectRepliesByDiaryId(diaryId: Int): List<Reply> {
        val replyEntities = replyDao.selectByDiaryId(diaryId)
        return replyEntities.map { entity -> replyObjectMapper.mapEntityToDomain(entity) }
    }
}