DROP TABLE public.user_teams;

DROP INDEX tag_index_foreign_keys_and_name;
CREATE UNIQUE INDEX tag_index_name ON tags(name);

DROP INDEX diary_index_foreign_keys_and_posted_at;
CREATE UNIQUE INDEX diary_index_foreign_key_and_posted_at ON diaries(user_id, posted_at);

ALTER TABLE public.diaries DROP COLUMN team_id;

ALTER TABLE public.tags DROP COLUMN team_id;

DROP TABLE public.teams;