<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <input :class="cn('border-input placeholder:text-muted-foreground focus-visible:ring-ring file:text-foreground file:border-muted flex h-9 w-full items-center justify-center rounded-md border bg-transparent px-3 py-1 text-sm transition-colors file:box-border file:rounded-sm file:border file:bg-transparent file:px-1 file:text-sm file:outline-none focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50', props.class)">
</template>
