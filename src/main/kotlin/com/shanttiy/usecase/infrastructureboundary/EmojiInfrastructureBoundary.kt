package com.shanttiy.usecase.infrastructureboundary

import com.shanttiy.domain.model.Emoji

interface EmojiInfrastructureBoundary {
    fun selectAllEmojis(): List<Emoji>

    fun selectEmojiById(emojiId: Int): Emoji?

}