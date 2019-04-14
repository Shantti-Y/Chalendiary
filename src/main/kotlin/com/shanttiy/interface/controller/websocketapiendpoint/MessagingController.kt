package com.shanttiy.infrastructure.config.application

import com.shanttiy.domain.Message
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.stereotype.Controller
import org.springframework.web.socket.messaging.SessionConnectEvent

@Controller
class MessagingController{
    @MessageMapping("/message")
    @SendTo("/chat/messages")
    fun messages(message: Message): Message {
        Thread.sleep(1000)
        println("sssssss")
        return message
    }

    @MessageMapping("/users")
    @SendTo("/chat/activities")
    fun activities(event: SessionConnectEvent): SessionConnectEvent {
        Thread.sleep(1000)
        return event
    }
}