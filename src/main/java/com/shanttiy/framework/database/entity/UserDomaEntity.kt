package com.shanttiy.framework.database.entity;

import org.seasar.doma.*;

import java.sql.Timestamp;

@Entity(immutable = true)
@Table(name = "users")
data class UserDomaEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    val id: Int? = null,

    @Column(name = "login_id")
    val loginId: String,

    @Column(name = "login_name")
    val loginName: String,

    @Column(name = "email")
    val email: String,

    @Column(name = "created_at")
    val createdAt: Timestamp,

    @Column(name = "updated_at")
    val updatedAt: Timestamp
)

// TODO created_at and updated_at must be initialized in this entity
