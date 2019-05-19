package com.shanttiy.framework.database.entity

import org.seasar.doma.*
import java.sql.Timestamp

@Entity(immutable = true)
@Table(name = "tags")
public class TagDomaEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    val id: Int? = null,

    @Column(name = "team_id")
    val teamId: Int,

    @Column(name = "owner_user_id")
    val ownerUserId: Int,

    @Column(name = "name")
    val name: String,

    @Column(name = "description")
    val description: String,

    @Column(name = "public_flag")
    val publicFlag: Boolean,

    @Column(name = "created_at")
    val createdAt: Timestamp? = null,

    @Column(name = "updated_at")
    val updatedAt: Timestamp? = null
)