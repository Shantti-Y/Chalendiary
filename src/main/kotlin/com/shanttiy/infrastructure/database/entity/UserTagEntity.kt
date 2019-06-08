package com.shanttiy.infrastructure.database.entity

import org.seasar.doma.*
import java.sql.Timestamp

@Entity(immutable = true)
@Table(name = "user_tags")
data class UserTagEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(sequence = "user_tags_id_seq")
    @Column(name = "id")
    val id: Int? = null,

    @Column(name = "user_id")
    val userId: Int,

    @Column(name = "tag_id")
    val tagId: Int,

    @Column(name = "created_at")
    val createdAt: Timestamp? = null
)