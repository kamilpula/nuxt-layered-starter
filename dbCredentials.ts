import process from 'node:process'

export const DB_CREDENTIALS = {
  host: process.env.DB_HOST!,
  port: Number.parseInt(process.env.DB_PORT!),
  database: process.env.DB_DATABASE!,
  user: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD !== '' ? process.env.DB_PASSWORD : undefined,
}
