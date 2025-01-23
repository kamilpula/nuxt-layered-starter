<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <code :class="cn('bg-muted/60 text-foreground rounded px-1', props.class)">
    <slot />
  </code>
</template>
