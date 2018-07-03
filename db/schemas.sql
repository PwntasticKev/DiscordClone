CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(180),
    email VARCHAR(180),
    img TEXT,
    auth_id TEXT
), CREATE TABLE IF NOT EXISTS channels (
  id SERIAL primary key,
  channel_name, varchar(40),
  img TEXT, 
)