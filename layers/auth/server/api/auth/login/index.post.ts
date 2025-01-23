import { insertUserSchema } from '~~/db/schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const { email, password } = insertUserSchema.parse(body)

    const user = await useDrizzle().query.users.findFirst({ where: user => eq(user.email, email) })

    if (!user) {
      return createError({
        statusCode: 404,
        statusMessage: 'User not found',
      })
    }

    if (await verifyPassword(user.password, password)) {
      await setUserSession(event, { user: { id: user.id, email: user.email } })

      return {
        email,
        id: user.id,
      }
    }

    return createError({
      statusCode: 401,
      statusMessage: 'Invalid credentials',
    })
  }
  catch {
    return createError({
      statusCode: 400,
    })
  }
})
