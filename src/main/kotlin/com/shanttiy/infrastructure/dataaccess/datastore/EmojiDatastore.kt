package com.shanttiy.infrastructure.dataaccess.datastore

import com.shanttiy.domain.model.Emoji
import org.springframework.stereotype.Component

@Component
class EmojiDatastore{

    private val store = hashMapOf<Int, Emoji>(
        1 to Emoji(id = 1, value = "1F604"),
        2 to Emoji(id = 2, value = "1F611"),
        3 to Emoji(id = 3, value = "1F625")
    )

    fun selectAll(): List<Emoji> {
        return store.values.toList()
    }

    fun selectById(emojiId: Int): Emoji?{
        return store[emojiId]
    }
}