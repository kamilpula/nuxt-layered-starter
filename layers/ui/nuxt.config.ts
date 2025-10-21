import { viewportBreakpoints } from '../../app/configs'
import { ViewportBreakpoint } from '../../types/enums'

export default defineNuxtConfig({
  // Main config
  modules: [
    'nuxt-viewport',
    '@nuxt/fonts',
  ],

  imports: {
    dirs: [
      'composables/**',
      'utils/**',
    ],
  },

  components: [
    { path: '#ui/app/components/cn', prefix: 'cn', pattern: '**/*.vue' },
    { path: '#ui/app/components/ui', prefix: 'ui', pattern: '**/*.vue' },
    { path: '#ui/app/components/in', prefix: 'in', pattern: '**/*.vue' },
  ],

  // Module
  viewport: {
    breakpoints: viewportBreakpoints,
    fallbackBreakpoint: ViewportBreakpoint.LG,
    defaultBreakpoints: {
      desktop: ViewportBreakpoint.LG,
      tablet: ViewportBreakpoint.MD,
      mobile: ViewportBreakpoint.SM,
    },
  },

  colorMode: {
    preference: 'dark', // Default value of $colorMode.preference
    fallback: 'dark', // Fallback value if not system preference found
    classPrefix: '',
    classSuffix: '',
    storageKey: 'kamilpula-color-mode',
  },

  fonts: {
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  compatibilityDate: '2024-04-03',

  // Dev
  telemetry: false,
})
