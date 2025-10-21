<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const { hasSlotContent } = useSlotContent()
</script>

<template>
  <div
    :class="
      cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-background border justify-between flex flex-col gap-2 relative',
        props.class,
      )
    "
  >
    <div
      v-if="hasSlotContent('badges')"
      class="absolute -top-3 -right-2 z-2 rounded-xl border bg-accent p-1 text-xs text-accent-foreground flex gap-2 items-center"
    >
      <slot name="badges" />
    </div>

    <div class="transition duration-200 group-hover/bento:translate-x-2 size-full">
      <slot name="header" />
    </div>

    <div class="transition duration-200 group-hover/bento:translate-x-2 flex gap-1 flex-col">
      <slot name="icon" />

      <div class="font-sans font-medium">
        <slot name="title" />
      </div>

      <div class="font-sans text-xs font-normal text-muted-foreground">
        <slot name="description" />
      </div>
    </div>

    <div v-if="hasSlotContent('footer')">
      <slot name="footer" />
    </div>
  </div>
</template>
