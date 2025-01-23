import type { LoginPage } from '#auth/types/app/pages'
import type { HomePage } from '#home/types/app/pages'

export const PAGES = {
  // Home layer
  home: (): HomePage => ({ name: 'home', meta: { origin: 'homeLayer', icon: 'uil:globe' } }),

  // Auth layer
  login: (): LoginPage => ({ name: 'login', meta: { origin: 'authLayer', icon: 'uil:sign-in' } }),

} as const
