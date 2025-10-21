<script setup lang="ts">
import type { VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'vue'
import { cva } from 'class-variance-authority'

interface UIIconVariantProps extends VariantProps<typeof uiIconVariants> {}

export interface UIIconProps {
  name: string
  size?: UIIconVariantProps['size']
  hoverable?: boolean
  iconClass?: HTMLAttributes['class']
  class?: HTMLAttributes['class']
}

const props = defineProps<UIIconProps>()

const uiIconVariants = cva('', {
  variants: {
    size: {
      'xs': 'size-3!',
      'sm': 'size-3.5!',
      'md': 'size-4!',
      'lg': 'size-4.5!',
      'xl': 'size-5!',
      '2xl': 'size-6!',
      '3xl': 'size-7!',
      '4xl': 'size-8!',
      'flag': 'w-4 h-2!',
      'custom': '',
    },

    hoverable: {
      true: 'hover:bg-secondary/50 cursor-pointer',
    },

  },

  defaultVariants: {
    size: 'lg',
  },
})

// By default, Nuxt/Icon uses `css` mode for icons. However, custom icons from our Design System prefixed with `mp` are SVGs.
// https://github.com/nuxt/icon/pull/154
const SVG_MODE_PREFIXES = ['gr']

const iconMode = computed(() => {
  return SVG_MODE_PREFIXES.some(prefix => props.name.startsWith(prefix)) ? 'svg' : 'css'
})
</script>

<template>
  <div :class="cn('inline-flex items-center justify-center rounded-full p-1 shrink-0', uiIconVariants({ hoverable, size }), props.class)">
    <Icon
      :name
      :class="cn('shrink-0', uiIconVariants({ size }), props.iconClass)"
      :mode="iconMode"
    />
  </div>
</template>
