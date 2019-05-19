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

    @Column(name = "unique_id")
    val uniqueId: String,

    @Column(name = "screen_name")
    val screenName: String,

    @Column(name = "email")
    val email: String,

    @Column(name = "thumbnail_path")
    val thumbnailPath: String,

    @Column(name = "phone")
    val phone: String,

    @Column(name = "created_at")
    val createdAt: Timestamp? = null,

    @Column(name = "updated_at")
    val updatedAt: Timestamp? = null
)
