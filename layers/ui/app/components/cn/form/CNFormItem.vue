<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { FORM_ITEM_INJECTION_KEY } from '#ui/types/injectionKeys'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const id = useId()

provide(FORM_ITEM_INJECTION_KEY, id)
</script>

<template>
  <div :class="cn('', props.class)">
    <slot />
  </div>
</template>
