package com.shanttiy.infrastructure.config.application

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.*

@Controller
@RequestMapping("")
class RootController(

) {
    @GetMapping("/")
    fun index(): String{
        return "index"
    }
}