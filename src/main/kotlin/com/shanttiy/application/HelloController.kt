package com.shanttiy.application

import com.shanttiy.framework.database.dao.UsersDomaDao
import com.shanttiy.framework.database.entity.UserDomaEntity
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/")
class HelloController(
        @Autowired
        private val usersDomaDao: UsersDomaDao
) {
    @GetMapping("")
    fun index(): List<UserDomaEntity> {
        val users = usersDomaDao.selectSomething()
        return users
    }
}