import fs from 'node:fs'
import { createResolver } from '@nuxt/kit'
import { SupportedLocale } from '../../../types/enums'

export default function localeResolver(basePath: string) {
  const LOCALES_DIR = 'locales'
  const INTERNAL_LOCALES_DIR = `app/${LOCALES_DIR}`

  function assertAllSupportedLocaleExist() {
    const { resolve } = createResolver(basePath)

    const resolvedDir = resolve(INTERNAL_LOCALES_DIR)

    if (!fs.existsSync(resolvedDir)) {
      throw new Error(`Locale directory ${resolvedDir} does not exist. Make sure it exists and contains all the locale files listed in SupportedLocale enum.`)
    }

    for (const locale of Object.values(SupportedLocale)) {
      const file = resolve(`${INTERNAL_LOCALES_DIR}/${locale}.json`)

      if (!fs.existsSync(file)) {
        throw new Error(`Locale file ${file} couldn't be found. Make sure it exists and is named '${locale}.json'.`)
      }
    }
  }

  // Config with accordance to https://v8.i18n.nuxtjs.org/guide/layers
  function createSupportedLocalesConfig() {
    const locales = Object.values(SupportedLocale).map(locale => ({
      code: locale,
      file: `${locale}.json`,
    }))

    return {
      lazy: true,
      langDir: LOCALES_DIR,
      locales,
    }
  }

  assertAllSupportedLocaleExist()

  return createSupportedLocalesConfig()
}
