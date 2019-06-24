package com.shanttiy.infrastructure.database.entity

import org.seasar.doma.*
import java.sql.Date
import java.sql.Timestamp
import java.time.LocalDateTime

@Entity(immutable = true)
@Table(name = "diaries")
data class DiaryEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(sequence = "diaries_id_seq")
    @Column(name = "id")
    val id: Int? = null,

    @Column(name = "user_id")
    val userId: Int,

    @Column(name = "content_text")
    val contentText: String,

    @Column(name = "posted_at")
    val postedAt: Date,

    @Column(name = "emoji_id")
    val emojiId: Int,

    @Column(name = "created_at")
    val createdAt: Timestamp? = Timestamp.valueOf(LocalDateTime.now()),

    @Column(name = "updated_at")
    val updatedAt: Timestamp? = null,

    @Column(name = "deleted_at")
    val deletedAt: Timestamp? = null
)