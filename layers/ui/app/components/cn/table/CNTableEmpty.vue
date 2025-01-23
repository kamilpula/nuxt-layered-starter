<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  colspan?: number
}>(), {
  colspan: 1,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <CNTableRow>
    <CNTableCell
      :class="
        cn(
          'text-foreground whitespace-nowrap p-4 align-middle text-sm',
          props.class,
        )
      "
      v-bind="delegatedProps"
    >
      <slot />
    </CNTableCell>
  </CNTableRow>
</template>
