<script setup lang="ts">
import type { STATUS_COLOR } from '#ui/constants/status/statusColor'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  // Time in milliseconds
  time?: number
  class?: HTMLAttributes['class']
  variant?: keyof typeof STATUS_COLOR
}>()

const { getFormattedDurationText } = timeFormatting()
const formattedTime = computed(() => getFormattedDurationText(props.time))

const colorClasses = computed(() => getStatusColorClasses(props.variant ?? 'total', { text: true, bg: true }))
</script>

<template>
  <div :class="cn('inline-flex items-center rounded px-1 text-xs font-medium', props.class, colorClasses)">
    <time>{{ formattedTime }}</time>
  </div>
</template>
