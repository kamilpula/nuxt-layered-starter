import mysql from 'mysql2/promise'
import { DB_CREDENTIALS } from '~~/dbCredentials'
import 'dotenv/config'

export * as schema from './schema'

export const connection = mysql.createPool(DB_CREDENTIALS)
