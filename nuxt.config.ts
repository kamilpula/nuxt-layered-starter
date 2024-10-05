// https://nuxt.com/docs/api/configuration/nuxt-config
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import process from 'node:process'
import { useLayers } from 'nuxt-layers-utils'

const __dirname = dirname(fileURLToPath(import.meta.url))

const layers = useLayers(__dirname, {
  ui: 'layers/ui',
  auth: 'layers/auth',
  home: 'layers/home',
})

export default defineNuxtConfig({
  // Main config
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@vee-validate/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/seo',
    '@nuxtjs/color-mode',
  ],

  extends: layers.extends(),

  alias: layers.alias('#'),

  imports: {
    dirs: [
      'composables/**',
      'utils/**',
    ],
  },

  runtimeConfig: {
    public: {
      nodeEnv: process.env.NODE_ENV,
      baseUrl: process.env.APP_BASE_URL,
      apiBaseClientUrl: process.env.API_BASE_CLIENT_URL,
      apiBaseServerUrl: process.env.API_BASE_SERVER_URL,
    },
  },

  // SEO
  site: {
    name: 'Global Reset',
  },

  // Module config
  pinia: {
    storesDirs: ['./app/stores/**'],
  },

  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: join(__dirname, './app/assets/icons'),
      },
    ],
  },

  i18n: {
    locales: [
      { code: 'en', language: 'en' },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'en',
    },
    vueI18n: './i18n.config.ts',
    baseUrl: process.env.NUXT_I18N_BASE_URL,
  },

  colorMode: {
    classSuffix: '',
  },

  // Build
  typescript: {
    strict: true,
    typeCheck: true,
  },

  compatibilityDate: '2024-10-02',

  future: {
    compatibilityVersion: 4,
  },

  vue: {
    propsDestructure: true,
  },

  // Dev
  telemetry: false,

  devServer: {
    port: 3001,
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
})
