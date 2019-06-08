package com.shanttiy.infrastructure.database.entity

import org.seasar.doma.*
import java.sql.Timestamp

@Entity(immutable = true)
@Table(name = "tags")
data class TagEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(sequence = "tags_id_seq")
    @Column(name = "id")
    val id: Int? = null,

    @Column(name = "owner_user_id")
    val ownerUserId: Int,

    @Column(name = "name")
    val name: String,

    @Column(name = "public_flag")
    val publicFlag: Boolean,

    @Column(name = "created_at")
    val createdAt: Timestamp? = null,

    @Column(name = "updated_at")
    val updatedAt: Timestamp? = null
)