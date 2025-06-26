
import type { HomePage } from '#home/types/app/pages'

export const PAGES = {
  // Home layer
  home: (): HomePage => ({ name: 'home', meta: { origin: 'homeLayer', icon: 'uil:globe' } }),

} as const
