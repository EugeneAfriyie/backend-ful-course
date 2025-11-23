import {databaseSync } from ' node:sqlite';


const db  = new databaseSync(':memory')

// Executr some SQL statement from stings

db.exec(`
CREATE TABLE users (
    id INTERGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
)

    `)



    db.exec(`
            CREATE TABLE todos (
            id INTERGER PRIMARY KEY AUROINCREMENT,
            user_id INTERGER,
            task TEXT,
            completed BOOLEN DEFAULT 0,
            FOREIGN KEY (user_id) REFERENCES users(id)

            )


        `)