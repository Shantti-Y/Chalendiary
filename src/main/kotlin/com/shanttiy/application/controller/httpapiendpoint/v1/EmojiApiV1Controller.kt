package com.shanttiy.application.controller.httpapiendpoint.v1

import com.shanttiy.application.responsedata.EmojisResponsedata
import com.shanttiy.application.responsedata.propertydata.EmojiPropertydataFactory
import com.shanttiy.application.usecaseboundary.EmojiUsecaseBoundary
import com.shanttiy.application.usecaseboundary.UserUsecaseBoundary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/emojis")
class EmojiApiV1Controller (
    @Autowired
    private val userUsecaseBoundary: UserUsecaseBoundary,
    @Autowired
    private val emojiUsecaseBoundary: EmojiUsecaseBoundary,
    @Autowired
    private val emojiPropertydataFactory: EmojiPropertydataFactory
) {
    @GetMapping("")
    fun getAllEmojis(
        @RequestHeader("Authorization") authorization: String
    ): EmojisResponsedata {
        val user = userUsecaseBoundary.findUserByToken(authorization)

        val emojis = emojiUsecaseBoundary.findAllEmojis()

        return EmojisResponsedata(
            emojis = emojis.map { emoji -> emojiPropertydataFactory.construct(emoji) }
        )
    }
}