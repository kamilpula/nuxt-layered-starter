import { viewportBreakpoints } from '../../app/configs'
import { ViewportBreakpoint } from '../../types/enums'

export default defineNuxtConfig({
  // Main config
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-viewport',
  ],

  imports: {
    dirs: [
      'composables/**',
      'utils/**',
    ],
  },

  components: [
    { path: '#ui/app/components/cn', prefix: 'cn', pattern: '**/*.vue' },
  ],

  // Module
  viewport: {
    breakpoints: viewportBreakpoints,
    fallbackBreakpoint: ViewportBreakpoint.LG,
    defaultBreakpoints: {
      desktop: ViewportBreakpoint.LG,
      tablet: ViewportBreakpoint.MD,
      mobile: ViewportBreakpoint.SM
    }
  },

  // Build
  typescript: {
    strict: true,
    typeCheck: true,
  },

  compatibilityDate: '2024-04-03',

  future: {
    compatibilityVersion: 4,
  },

  // Dev
  telemetry: false,

  devServer: {
    port: 4001,
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
})
