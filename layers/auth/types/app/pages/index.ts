import type { AppPage } from '~~/types/app/page/appPage'

export interface LoginPage extends AppPage {
  name: 'login'
  meta: {
    origin: 'authLayer'
    icon: 'uil:sign-in'
  }
}
