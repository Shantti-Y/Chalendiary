package com.shanttiy.infrastructure.database.entity;

import org.seasar.doma.*;

import java.sql.Timestamp;
import java.time.LocalDateTime

@Entity(immutable = true)
@Table(name = "users")
data class UserEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(sequence = "users_id_seq")
    @Column(name = "id")
    val id: Int? = null,

    @Column(name = "screen_name")
    val screenName: String,

    @Column(name = "email")
    val email: String,

    @Column(name = "thumbnail_path")
    val thumbnailPath: String,

    @Column(name = "phone")
    val phone: String,

    @Column(name = "unique_id")
    val uniqueId: String,

    @Column(name = "created_at")
    val createdAt: Timestamp? = Timestamp.valueOf(LocalDateTime.now()),

    @Column(name = "updated_at")
    val updatedAt: Timestamp? = null
)
