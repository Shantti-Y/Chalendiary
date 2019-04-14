package com.shanttiy.`interface`.controller.httpapiendpoint

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/static")
class StaticController(

) {
    @GetMapping("/getusers")
    @ResponseBody
    fun index(model: Model): String{
        return "index"
    }
}