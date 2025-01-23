import { drizzle } from 'drizzle-orm/mysql2'
import { connection } from '~~/db'
import * as schema from '~~/db/schema'
import 'dotenv/config'

export { and, eq, or, sql } from 'drizzle-orm'

export const tables = schema

export function useDrizzle() {
  return drizzle({ client: connection, schema, mode: 'default', casing: 'snake_case' })
}
