"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
exports.configuration = {
    client: "sqlite3",
    connection: {
        connectionString: './db/db.sqlite',
        timezone: "utc",
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        directory: "./db/migrations",
    },
    useNullAsDefault: true
};
