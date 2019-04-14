package com.shanttiy.infrastructure.eventlistener

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationListener
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.messaging.simp.stomp.StompHeaderAccessor
import org.springframework.messaging.simp.user.SimpUserRegistry
import org.springframework.stereotype.Component
import org.springframework.web.socket.messaging.SessionConnectEvent

@Component
class WebSocketSessionConnectedEventListener(
    @Autowired
    private val messagingTemplate: SimpMessagingTemplate,
    @Autowired
    val userRegistry: SimpUserRegistry
): ApplicationListener<SessionConnectEvent>{

    override fun onApplicationEvent(event: SessionConnectEvent) {
        println("Session Connected\n")
        val headers = StompHeaderAccessor.wrap(event.getMessage())
        println("Activities increased!!")
        println(userRegistry.getUsers())
        val loginId = headers.getNativeHeader("login")
        messagingTemplate.convertAndSend("/chat/activities", loginId)
    }
}