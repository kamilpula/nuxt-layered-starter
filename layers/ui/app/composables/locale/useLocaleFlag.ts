export function useLocaleFlags() {
  const COMMON_LOCALE_FLAGS_MAP = {
    en: 'gb',
  }

  const FLAG_SIZE = '4x3'

  function getLocaleFlagIcon(localeCode: string) {
    const mappedLocaleFlag = COMMON_LOCALE_FLAGS_MAP[localeCode as keyof typeof COMMON_LOCALE_FLAGS_MAP]

    return `flag:${mappedLocaleFlag ?? localeCode}-${FLAG_SIZE}`
  }

  return { getLocaleFlagIcon }
}
