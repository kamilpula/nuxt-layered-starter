<script lang="ts" setup>
interface GradientButtonProps {
  borderWidth?: number
  colors?: string[]
  duration?: number
  borderRadius?: number
  blur?: number
  class?: string
  bgColor?: string
}

const props = withDefaults(defineProps<GradientButtonProps>(), {
  colors: () => [
    'var(--color-blue-500)',
    'var(--color-blue-600)',
    'var(--color-blue-700)',
    'var(--color-blue-600)',
    'var(--color-blue-500)',
    'var(--color-blue-400)',
  ],
  duration: 2500,
  borderWidth: 2,
  borderRadius: 8,
  blur: 4,
  bgColor: '#000',
})

const durationInMilliseconds = computed(() => `${props.duration}ms`)
const allColors = computed(() => props.colors.join(', '))
const borderWidthInPx = computed(() => `${props.borderWidth}px`)
const borderRadiusInPx = computed(() => `${props.borderRadius}px`)
const blurPx = computed(() => `${props.blur}px`)
</script>

<template>
  <button
    :class="
      cn(
        'relative flex shrink-0 items-center justify-center before:absolute before:-inset-[200%] overflow-hidden animate-rainbow rainbow-btn hover:cursor-pointer hover:opacity-80 before:h-300 sm:before:h-auto',
        props.class,
      )
    "
  >
    <span class="btn-content inline-flex size-full items-center justify-center h-9 text-sm font-medium">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.animate-rainbow::before {
  content: "";
  background: conic-gradient(v-bind(allColors));
  animation: rotate-rainbow v-bind(durationInMilliseconds) linear infinite;
  filter: blur(v-bind(blurPx));
  padding: v-bind(borderWidthInPx);
}

.rainbow-btn {
  padding: v-bind(borderWidthInPx);
  border-radius: v-bind(borderRadiusInPx);
}

.btn-content {
  border-radius: v-bind(borderRadiusInPx);
  background-color: v-bind(bgColor);
  z-index: 0;
}

@keyframes rotate-rainbow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
