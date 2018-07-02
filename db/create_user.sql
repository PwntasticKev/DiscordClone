INSERT INTO users
(username, email, hashedpw)
VALUES
( $1, $2, $3 )
RETURNING *;