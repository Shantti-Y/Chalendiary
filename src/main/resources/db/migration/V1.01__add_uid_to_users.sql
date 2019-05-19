ALTER TABLE users
ADD COLUMN unique_id character(28) NOT NULL;
CREATE UNIQUE INDEX user_index_unique_id ON users(unique_id);