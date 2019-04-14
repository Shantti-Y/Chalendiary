package com.shanttiy.infrastructure.config

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.env.Environment
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.stereotype.Component
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.CorsConfigurationSource
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.servlet.config.annotation.EnableWebMvc

@Component
@Configuration
@EnableWebSecurity
class WebSecurityConfig(
    @Autowired
    private val environment: Environment
): WebSecurityConfigurerAdapter() {

    @Autowired
    fun configureGlobal(auth: AuthenticationManagerBuilder) {}

    override fun configure(http: HttpSecurity) {
        http.authorizeRequests()
            .antMatchers("/**").permitAll()
            .anyRequest().authenticated()
            .and().cors().configurationSource(corsConfigurationSource())
            .and().csrf().disable()
    }

    @Bean
    fun corsConfigurationSource(): CorsConfigurationSource{
        val corsConf = CorsConfiguration()
        corsConf.setAllowedOrigins(listOf("http://localhost:8080"))
        corsConf.setAllowCredentials(true)

        corsConf.addAllowedHeader(CorsConfiguration.ALL)
        corsConf.setMaxAge(315316000)

        corsConf.setAllowedMethods(listOf("GET", "POST", "PUT", "DELETE", "OPTIONS"))
        val corsConfSource = UrlBasedCorsConfigurationSource()
        corsConfSource.registerCorsConfiguration("/**", corsConf)
        return corsConfSource
    }
}