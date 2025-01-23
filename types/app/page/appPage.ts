import type { PAGES } from '~~/constants/page/pages'

export interface AppPage {
  name: string
  meta: {
    origin: string
    icon?: string
  }
}

export type AppPageObjects = ReturnType<typeof PAGES[keyof typeof PAGES]>
export type AppPages = AppPageObjects | AppPageObjects['name']
