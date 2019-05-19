package com.shanttiy.framework.database.entity

import org.seasar.doma.*
import java.sql.Date
import java.sql.Timestamp

@Entity(immutable = true)
@Table(name = "diaries")
data class DiaryDomaEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    val id: Int? = null,

    @Column(name = "team_id")
    val teamId: Int,

    @Column(name = "user_id")
    val userId: Int,

    @Column(name = "content_text")
    val contentText: String,

    @Column(name = "posted_at")
    val postedAt: Date,

    @Column(name = "created_at")
    val createdAt: Timestamp? = null,

    @Column(name = "updated_at")
    val updatedAt: Timestamp? = null
)