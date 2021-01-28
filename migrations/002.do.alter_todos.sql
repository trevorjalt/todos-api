CREATE TYPE TODOS_CATEGORY AS ENUM (
    'Personal',
    'Work'
);

ALTER TABLE todos
    ADD COLUMN
        category TODOS_CATEGORY NOT NULL;
