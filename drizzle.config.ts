import { defineConfig } from 'drizzle-kit'
import { DB_CREDENTIALS } from './dbCredentials'

export default defineConfig({
  out: './drizzle',
  schema: './db/schema',
  dialect: 'mysql',
  dbCredentials: DB_CREDENTIALS,
  casing: 'snake_case',
})
