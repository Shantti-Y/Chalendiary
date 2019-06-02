package com.shanttiy.infrastructure.eventlistener

import org.springframework.context.ApplicationListener
import org.springframework.stereotype.Component
import org.springframework.web.socket.messaging.SessionDisconnectEvent

@Component
class WebSocketSessionDisconnectedEventListener(): ApplicationListener<SessionDisconnectEvent> {

    override fun onApplicationEvent(event: SessionDisconnectEvent) {
        println("Session DisConnected\n")
        println("Message: ${event.message}\n")
        println("User: ${event.user}\n")
        println("Source: ${event.source}\n")
        println("SessionId: ${event.sessionId}\n")
    }
}