import { Knex } from "knex"

export const configuration: Knex.Config = {
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
}