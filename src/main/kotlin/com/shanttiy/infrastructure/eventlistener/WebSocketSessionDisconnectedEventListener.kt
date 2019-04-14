package com.shanttiy.infrastructure.eventlistener

import org.springframework.context.ApplicationListener
import org.springframework.stereotype.Component
import org.springframework.web.socket.messaging.SessionDisconnectEvent

@Component
class WebSocketSessionDisconnectedEventListener(): ApplicationListener<SessionDisconnectEvent> {

    override fun onApplicationEvent(event: SessionDisconnectEvent) {
        println("Session Connected\n")
        println("Message: ${event.getMessage()}\n")
        println("User: ${event.getUser()}\n")
        println("Source: ${event.getSource()}\n")
    }
}