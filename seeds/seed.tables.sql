BEGIN;

TRUNCATE
    todos
    RESTART IDENTITY CASCADE;

INSERT INTO todos (title, completed, category)
VALUES
    ('Eat breakfast', true, 'Personal'),
    ('Gym', false, 'Personal'),
    ('Go Tanning', false, 'Personal'),
    ('Complete Assessment', true, 'Work'),
    ('Study Algorithms', false,'Work');

COMMIT;