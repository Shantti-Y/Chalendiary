package com.shanttiy.framework.database.entity;

import org.seasar.doma.*;

@Entity
@Table(name = "users")
public class UserDomaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    public String login_id;
    public String login_name;
    public String email;
}

// TODO created_at and updated_at must be initialized in this entity
