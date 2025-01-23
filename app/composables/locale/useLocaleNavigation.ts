import type { AppPageObjects, AppPages } from '~~/types/app/page/appPage'

interface OpenOptions {
  target: '_blank' | '_parent' | '_self' | '_top'
}

interface NavigateToOptions {
  replace?: boolean
  redirectCode?: number
  external?: boolean
  open?: OpenOptions
}

export default function useLocaleNavigation() {
  const localePath = useLocalePath()
  const route = useRoute()
  const { t } = useI18n()

  async function navigateToLocalePath(page: AppPages | Omit<AppPageObjects, 'meta'>, config?: NavigateToOptions) {
    return navigateTo(getLocalePath(page), config)
  }

  function getLocalePath(page: AppPages | Omit<AppPageObjects, 'meta'>) {
    return localePath(page)
  }

  function isCurrentRoute(page: AppPages | Omit<AppPageObjects, 'meta'>) {
    return route.path === localePath(page)
  }

  function getTranslatedPage(page: AppPageObjects) {
    return {
      to: getLocalePath(page),
      name: t(`${page.meta.origin}.page.${page.name}.title`),
    }
  }

  return {
    navigateToLocalePath,
    isCurrentRoute,
    getLocalePath,
    getTranslatedPage,
  }
}
