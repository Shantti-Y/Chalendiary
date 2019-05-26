package com.shanttiy.usecase.exception

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ResponseStatus

// TODO: return a message in a response body
@ResponseStatus(HttpStatus.FORBIDDEN)
class AccessForbiddenException(): RuntimeException(){}