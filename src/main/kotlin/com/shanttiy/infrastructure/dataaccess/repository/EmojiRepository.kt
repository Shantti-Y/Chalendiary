package com.shanttiy.infrastructure.dataaccess.repository

import com.shanttiy.domain.model.Emoji
import com.shanttiy.infrastructure.dataaccess.datastore.EmojiDatastore
import com.shanttiy.usecase.infrastructureboundary.EmojiInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository

@Repository
class EmojiRepository(
    @Autowired
    private val emojiDatastore: EmojiDatastore
): EmojiInfrastructureBoundary{

    override fun selectAllEmojis(): List<Emoji> {
        return emojiDatastore.selectAll()
    }

    override fun selectEmojiById(emojiId: Int): Emoji? {
        return emojiDatastore.selectById(emojiId)
    }
}