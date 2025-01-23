import type { AppPage } from '~~/types/app/page/appPage'

export interface HomePage extends AppPage {
  name: 'home'
  meta: {
    origin: 'homeLayer'
    icon: 'uil:globe'
  }
}
