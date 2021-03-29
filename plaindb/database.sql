
CREATE DATABASE writable_database_plain;

-- \c writable_database_plain

CREATE TABLE writable(
    writable_id SERIAL PRIMARY KEY ,
    data TEXT
);

-- \dt
