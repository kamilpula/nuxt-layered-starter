// Prevents the user from accessing the auth pages if they are already authorized
export default defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserSession()

  if (loggedIn.value) {
    return abortNavigation()
  }
})
