import { useVp } from '~/composables/viewport/useVp'

export default defineNuxtPlugin({
  name: 'vp',
  setup() {
    return {
      provide: {
        vp: useVp,
      },
    }
  },
})
