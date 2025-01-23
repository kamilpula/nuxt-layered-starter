// Prevents the user from accessing the page if they are not authorized
export default defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserSession()
  const localePath = useLocalePath()

  if (!loggedIn.value) {
    return navigateTo(localePath('login'))
  }
})
