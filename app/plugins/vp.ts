

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
