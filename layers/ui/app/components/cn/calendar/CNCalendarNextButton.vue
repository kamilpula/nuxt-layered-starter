<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { ChevronRightIcon } from '@radix-icons/vue'
import { CalendarNext, type CalendarNextProps, useForwardProps } from 'radix-vue'
import { buttonVariants } from '~~/layers/ui/app/components/cn/button'

const props = defineProps<CalendarNextProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarNext
    :class="cn(
      buttonVariants({ variant: 'outline' }),
      'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot>
      <ChevronRightIcon class="size-4" />
    </slot>
  </CalendarNext>
</template>
