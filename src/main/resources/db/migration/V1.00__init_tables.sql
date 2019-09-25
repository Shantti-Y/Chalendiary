CREATE TABLE nikocale.teams (
    id serial PRIMARY KEY,
    name character varying(20) NOT NULL,
    domain character varying(60) NOT NULL,
    thumbnail_path character varying NOT NULL,
    description text NOT NULL,
    created_at timestamp without time zone DEFAULT NOW() NOT NULL,
    updated_at timestamp without time zone
);
CREATE UNIQUE INDEX team_index_domain ON teams(domain);

CREATE TABLE nikocale.users (
    id serial PRIMARY KEY,
    screen_name character varying(20) NOT NULL,
    email character varying(100) NOT NULL,
    thumbnail_path character varying NOT NULL,
    phone character varying(11),
    created_at timestamp without time zone DEFAULT NOW() NOT NULL,
    updated_at timestamp without time zone
);
CREATE UNIQUE INDEX user_index_email ON users(email);

CREATE TABLE nikocale.tags (
    id serial PRIMARY KEY,
    team_id integer NOT NULL,
    owner_user_id integer NOT NULL,
    name character varying(20) NOT NULL,
    description text NOT NULL,
    public_flag boolean NOT NULL,
    created_at timestamp without time zone DEFAULT NOW() NOT NULL,
    updated_at timestamp without time zone,
    FOREIGN KEY (team_id) REFERENCES teams (id),
    FOREIGN KEY (owner_user_id) REFERENCES users (id)
);
CREATE UNIQUE INDEX tag_index_foreign_keys_and_name ON tags(team_id, name);

CREATE TABLE nikocale.diaries (
    id serial PRIMARY KEY,
    team_id integer NOT NULL,
    user_id integer NOT NULL,
    content_text text NOT NULL,
    posted_at date NOT NULL,
    created_at timestamp without time zone DEFAULT NOW() NOT NULL,
    updated_at timestamp without time zone,
    FOREIGN KEY (team_id) REFERENCES teams (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);
CREATE UNIQUE INDEX diary_index_foreign_keys_and_posted_at ON diaries(team_id, user_id, posted_at);

CREATE TABLE nikocale.replies (
    id serial PRIMARY KEY,
    diary_id integer NOT NULL,
    user_id integer NOT NULL,
    content_text text NOT NULL,
    created_at timestamp without time zone DEFAULT NOW() NOT NULL,
    updated_at timestamp without time zone,
    FOREIGN KEY (diary_id) REFERENCES diaries (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE nikocale.user_tags (
    id serial PRIMARY KEY,
    user_id integer NOT NULL,
    tag_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT NOW() NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (tag_id) REFERENCES tags (id)
);
CREATE UNIQUE INDEX user_tag_index_foreign_keys_and ON user_tags(user_id, tag_id);

CREATE TABLE nikocale.user_teams (
    id serial PRIMARY KEY,
    user_id integer NOT NULL,
    team_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT NOW() NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (team_id) REFERENCES teams (id)
);
CREATE UNIQUE INDEX user_team_index_foreign_keys_and ON user_teams(user_id, team_id);