import { eq } from 'drizzle-orm'
import { insertUserSchema, users } from '~~/db/schema'

const REGISTER_USER_ACCOUNT_SECRET = 'FROM_ZERO'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (body.secret !== REGISTER_USER_ACCOUNT_SECRET) {
    return createError({
      statusCode: 403,
      statusMessage: 'Unauthorized',
    })
  }

  try {
    const { email, password } = insertUserSchema.parse(body)

    const dbUser = await useDrizzle().query.users.findFirst({ where: user => eq(user.email, email) })

    if (dbUser) {
      return createError({
        statusCode: 409,
        statusMessage: 'User with given email address already exists',
      })
    }

    const hashedPassword = await hashPassword(password)
    const registeredUser = await useDrizzle().insert(users).values({ email, password: hashedPassword }).$returningId()

    const registeredUserId = registeredUser[0]?.id

    if (!registeredUserId)
      return createError({ statusCode: 401 })

    await setUserSession(event, { user: { id: registeredUserId, email } })

    return {
      statusCode: 201,
      body: {
        message: 'User registered successfully',
        email,
      },
    }
  }
  catch (error) {
    return createError({
      statusCode: 400,
      statusMessage: JSON.stringify(error),
    })
  }
})
