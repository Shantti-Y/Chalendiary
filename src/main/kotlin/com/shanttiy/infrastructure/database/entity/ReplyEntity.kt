package com.shanttiy.infrastructure.database.entity

import org.seasar.doma.*
import java.sql.Date
import java.sql.Timestamp

@Entity(immutable = true)
@Table(name = "replies")
data class ReplyEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(sequence = "replies_id_seq")
    @Column(name = "id")
    val id: Int? = null,

    @Column(name = "diary_id")
    val diaryId: Int,

    @Column(name = "user_id")
    val userId: Int,

    @Column(name = "content_text")
    val contentText: String,

    @Column(name = "created_at")
    val createdAt: Timestamp? = null,

    @Column(name = "updated_at")
    val updatedAt: Timestamp? = null
)