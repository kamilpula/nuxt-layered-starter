<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  title?: string
  description?: string
  titleClass?: HTMLAttributes['class']
  descriptionClass?: HTMLAttributes['class']
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('flex flex-col gap-1', props.class)">
    <h1 :class="cn('text-xl', props.titleClass)">
      <slot>
        {{ title }}
      </slot>
    </h1>

    <p v-if="description" :class="cn('text-muted-foreground', props.descriptionClass)">
      {{ description }}
    </p>
  </div>
</template>
