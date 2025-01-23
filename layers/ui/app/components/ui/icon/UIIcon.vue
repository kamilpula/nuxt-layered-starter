<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'

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
      'sm': 'min-h-3.5 min-w-3.5',
      'md': 'min-h-4 min-w-4',
      'lg': 'min-h-[1.125rem] min-w-[1.125rem]',
      'xl': 'min-h-5 min-w-5',
      '2xl': 'min-h-6 min-w-6',
      '3xl': 'min-h-7 min-w-7',
      '4xl': 'min-h-8 min-w-8',
      'flag': 'min-h-2 min-w-4',
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
  <div :class="cn('inline-flex items-center rounded-full p-1', uiIconVariants({ hoverable }), props.class)">
    <Icon :name :class="cn(uiIconVariants({ size }), props.iconClass)" :mode="iconMode" />
  </div>
</template>
