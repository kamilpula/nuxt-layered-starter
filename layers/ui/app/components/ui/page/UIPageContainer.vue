<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  wrapperClass?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('flex w-full justify-center', props.class)">
    <div :class="cn('flex flex-1 flex-col gap-2 self-center px-2 py-4', props.wrapperClass)">
      <slot />
    </div>
  </div>
</template>
