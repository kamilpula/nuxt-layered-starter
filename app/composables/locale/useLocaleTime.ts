export function useLocaleTime() {
  const { locale } = useI18n()

  const timeProps = computed(() => ({
    locale: locale.value,
    minute: '2-digit' as const,
    weekday: 'short' as const,
    second: '2-digit' as const,
    year: 'numeric' as const,
    hour: 'numeric' as const,
    month: 'long' as const,
    day: '2-digit' as const,
  }))

  return {
    timeProps,
  }
}
