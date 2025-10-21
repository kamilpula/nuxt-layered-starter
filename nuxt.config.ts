// https://nuxt.com/docs/api/configuration/nuxt-config
import { dirname, join } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { useLayers } from 'nuxt-layers-utils'

const __dirname = dirname(fileURLToPath(import.meta.url))

const layers = useLayers(__dirname, {
  ui: 'layers/ui',
  home: 'layers/home',
})

export default defineNuxtConfig({
  // Main config
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/seo',
    '@nuxtjs/color-mode',
    'nuxt-auth-utils',
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
    session: {
      name: 'nuxt-layered-starter',
      password: '12e84988926c30232a87b144fc5d481520b24567e64612358bb3fc68672ff6de',
      maxAge: 60 * 60 * 24 * 30, // 1 month
    },

    public: {
    },
  },

  // SEO
  site: {
    name: 'nuxt-layered-starter',
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

  // Build
  css: ['~/assets/css/tailwind.css'],

  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    minify: true,
    experimental: {
      websocket: true,
    },
  },

  vite: {
    optimizeDeps: {
      exclude: ['vee-validate'],
    },
    plugins: [
      tailwindcss(),
    ],
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  vue: {
    propsDestructure: true,
  },

  // Dev
  telemetry: false,

  devServer: {
    port: 3000,
  },
})
