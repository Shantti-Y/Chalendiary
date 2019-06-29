package com.shanttiy.usecase.interactor

import com.shanttiy.application.usecaseboundary.EmojiUsecaseBoundary
import com.shanttiy.domain.model.Emoji
import com.shanttiy.usecase.infrastructureboundary.EmojiInfrastructureBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.security.InvalidParameterException

@Service
class EmojiInteractor (
    @Autowired
    private val emojiInfrastructureBoundary: EmojiInfrastructureBoundary
): EmojiUsecaseBoundary{

    override fun findAllEmojis(): List<Emoji> {
        return emojiInfrastructureBoundary.selectAllEmojis()
    }

    override fun findEmojiById(emojiId: Int): Emoji {
        val emoji = emojiInfrastructureBoundary.selectEmojiById(emojiId)
        if (emoji != null) return emoji else throw InvalidParameterException()
    }
}