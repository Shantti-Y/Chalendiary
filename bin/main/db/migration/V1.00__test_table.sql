CREATE TABLE public.users (
    id serial PRIMARY KEY,
    login_id character varying NOT NULL,
    login_name character varying NOT NULL,
    email character varying NOT NULL,
    created_at timestamp without time zone DEFAULT NOW() NOT NULL,
    updated_at timestamp without time zone DEFAULT NOW() NOT NULL
);
CREATE TABLE public.posts (
    id serial PRIMARY KEY,
    user_id integer NOT NULL,
    text_content text NOT NULL,
    created_at timestamp without time zone DEFAULT NOW() NOT NULL,
    updated_at timestamp without time zone DEFAULT NOW() NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
);
