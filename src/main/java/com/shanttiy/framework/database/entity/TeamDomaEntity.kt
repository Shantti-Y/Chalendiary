package com.shanttiy.framework.database.entity

import org.seasar.doma.*
import java.sql.Timestamp

@Entity(immutable = true)
@Table(name = "teams")
data class TeamDomaEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    val id: Int? = null,

    @Column(name = "name")
    val name: String,

    @Column(name = "domain")
    val domain: String,

    @Column(name = "thumbnail_path")
    val thumbnailPath: String,

    @Column(name = "description")
    val description: String,

    @Column(name = "created_at")
    val createdAt: Timestamp? = null,

    @Column(name = "updated_at")
    val updatedAt: Timestamp? = null
)