package com.shanttiy.infrastructure.dataaccess.datastore

import com.shanttiy.domain.model.Emoji
import org.springframework.stereotype.Component

@Component
class EmojiDatastore{

    private val store = hashMapOf<Int, Emoji>(
        1 to Emoji(id = 1, value = "\uD83D\uDE06", style = hashMapOf("filter" to "hue-rotate(0deg)")),
        2 to Emoji(id = 2, value = "\uD83D\uDE11", style = hashMapOf("filter" to "hue-rotate(290deg)")),
        3 to Emoji(id = 3, value = "\uD83D\uDE25", style = hashMapOf("filter" to "hue-rotate(170deg)"))
    )

    fun selectAll(): List<Emoji> {
        return store.values.toList()
    }

    fun selectById(emojiId: Int): Emoji?{
        return store[emojiId]
    }
}