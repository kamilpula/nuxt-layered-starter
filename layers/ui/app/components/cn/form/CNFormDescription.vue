<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  id?: HTMLAttributes['id']
}>()

const { formDescriptionId } = useFormField()
</script>

<template>
  <p
    :id="props.id ?? formDescriptionId"
    :class="cn('text-muted-foreground text-sm', props.class)"
  >
    <slot />
  </p>
</template>
