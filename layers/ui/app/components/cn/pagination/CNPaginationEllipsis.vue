<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { PaginationEllipsis, type PaginationEllipsisProps } from 'reka-ui'


const props = defineProps<PaginationEllipsisProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <PaginationEllipsis
    data-slot="pagination-ellipsis"
    v-bind="delegatedProps"
    :class="cn('flex size-9 items-center justify-center', props.class)"
  >
    <slot>
      <Icon name="mdi:dots-horizontal" class="size-4" />
      <span class="sr-only">More pages</span>
    </slot>
  </PaginationEllipsis>
</template>
