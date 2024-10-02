import localeResolver from '../../app/utils/locale/localeResolver'

export default defineNuxtConfig({
  // Main config
  imports: {
    dirs: [
      'composables/**',
      'utils/**',
    ],
  },

  components: [
    { path: '#auth/app/components', prefix: 'auth', pattern: '**/*.vue' },
  ],

  // Modules

  i18n: localeResolver(import.meta.url),

  // Build
  future: {
    compatibilityVersion: 4,
  },
})
