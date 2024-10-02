import en from './app/locales/en.json'

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en: { ...en },
  },
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'EUR',
        notation: 'standard',
      },
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      percent: {
        style: 'percent',
        useGrouping: false,
      },
    },
  },
}))
