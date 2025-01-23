export function useAuthUser() {
  const { clear, fetch: refreshSession } = useUserSession()
  const { toast } = useToast()
  const { t } = useI18n()
  const { navigateToLocalePath } = useLocaleNavigation()

  async function handleLogout() {
    await clear()
    toast({ title: t('authLayer.logout.toast.success'), variant: 'success' })
    await navigateToLocalePath('login')
  }

  async function handleLoginSuccess() {
    await refreshSession()
    toast({ title: t('authLayer.login.toast.success'), variant: 'success' })
    await navigateToLocalePath('home')
  }

  return {
    handleLogout,
    handleLoginSuccess,
  }
}
