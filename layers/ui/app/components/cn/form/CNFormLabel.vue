<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { Label, type LabelProps } from 'radix-vue'

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()

const { error, formItemId } = useFormField()
</script>

<template>
  <Label
    :class="cn(
      'font-medium',
      error && 'text-destructive',
      props.class,
    )"
    :for="props.for ?? formItemId"
  >
    <slot />
  </Label>
</template>
