import knex from 'knex'
import configuration from '../knexfile'

export const db = knex(configuration.development)