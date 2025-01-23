import { mysqlTable, serial, timestamp, varchar } from 'drizzle-orm/mysql-core'
import { createInsertSchema } from 'drizzle-zod'

export const users = mysqlTable('users', {
  id: serial().primaryKey(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  createdAt: timestamp().notNull().defaultNow(),
})

export const insertUserSchema = createInsertSchema(users)
