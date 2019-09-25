ALTER TABLE nikocale.users
ADD COLUMN unique_id character(28) NOT NULL;
DROP INDEX user_index_email;
CREATE UNIQUE INDEX user_index_unique_id ON users(unique_id);