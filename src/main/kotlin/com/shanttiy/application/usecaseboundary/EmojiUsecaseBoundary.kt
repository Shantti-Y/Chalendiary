package com.shanttiy.application.usecaseboundary

import com.shanttiy.domain.model.Emoji

interface EmojiUsecaseBoundary {
    fun findAllEmojis(): List<Emoji>

    fun findEmojiById(emojiId: Int): Emoji
}