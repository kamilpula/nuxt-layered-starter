<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <UIIcon name="material-symbols:progress-activity" :class="cn('animate-spin items-center justify-center', props.class)" size="lg" />
</template>
