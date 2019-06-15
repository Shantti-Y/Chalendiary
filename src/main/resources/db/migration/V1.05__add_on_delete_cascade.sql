ALTER TABLE replies
DROP CONSTRAINT replies_user_id_fkey,
ADD CONSTRAINT replies_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE;

ALTER TABLE diaries
DROP CONSTRAINT diaries_user_id_fkey,
ADD CONSTRAINT diaries_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE;

ALTER TABLE user_tags
DROP CONSTRAINT user_tags_tag_id_fkey,
ADD CONSTRAINT user_tags_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES tags (id) ON DELETE CASCADE,
DROP CONSTRAINT user_tags_user_id_fkey,
ADD CONSTRAINT user_tags_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE;

ALTER TABLE tags
DROP CONSTRAINT tags_owner_user_id_fkey,
ADD CONSTRAINT tags_owner_user_id_fkey FOREIGN KEY (owner_user_id) REFERENCES users (id) ON DELETE CASCADE;