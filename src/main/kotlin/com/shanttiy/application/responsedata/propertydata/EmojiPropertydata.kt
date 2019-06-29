package com.shanttiy.application.responsedata.propertydata

import com.shanttiy.application.usecaseboundary.ReplyUsecaseBoundary
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import com.shanttiy.domain.model.Diary
import com.shanttiy.domain.model.Emoji
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

data class EmojiPropertydata (
    val id: Int,
    val value: String,
    val style: HashMap<String, String>
)

@Component
class EmojiPropertydataFactory(
){
    fun construct(emoji: Emoji): EmojiPropertydata{
        return EmojiPropertydata(
            id = emoji.id,
            value = emoji.value,
            style = emoji.style
        )
    }
}