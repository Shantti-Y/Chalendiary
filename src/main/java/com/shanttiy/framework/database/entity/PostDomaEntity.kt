package com.shanttiy.framework.database.entity;

import org.seasar.doma.*;

import java.sql.Timestamp;

@Entity(immutable = true)
@Table(name = "posts")
public class PostDomaEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    val id: Int? = null,

    @Column(name = "user_id")
    val userId: Int,

    @Column(name = "text_content")
    val textContent: String,

    @Column(name = "created_at")
    val createdAt: Timestamp,

    @Column(name = "updated_at")
    val updatedAt: Timestamp
)
