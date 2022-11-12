// create table command
export const CREATE_TODO_TABLE_COMMAND = `
CREATE TABLE IF NOT EXISTS todos(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed BOOLEAN NOT NULL CHECK (completed IN (0, 1)) DEFAULT 0,
    userId INTEGER NOT NULL
);
`;

export const CREATE_USER_TABLE_COMMAND = `
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);
`;

export const REGISTER_COMMAND = `
INSERT INTO users(email, password) VALUES(?, ?);
`;

export const LOGIN_COMMAND = `
SELECT id, email FROM users WHERE email = (?) AND password = (?);
`;

// insert into todos table command

export const INSERT_TODO_COMMAND = `
INSERT INTO todos(title, userId) VALUES(?, ?);
`;
// get all todos command
export const ALL_TODOS_COMMAND = `
SELECT * FROM todos WHERE userId = ? ORDER BY id DESC;
`;
// get a single todo command
export const SINGLE_TODOS_COMMAND = `
SELECT * FROM todos WHERE id = ?;
`;
// update todo command
export const UPDATE_TODOS_COMMAND = `
UPDATE todos SET completed = ? WHERE id = ?;
`;
// delete todo command
export const DELETE_TODOS_COMMAND = `
DELETE FROM todos WHERE id = ?;
`;
