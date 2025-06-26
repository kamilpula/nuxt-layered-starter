<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { useSidebar } from './utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <CNButton
    data-sidebar="trigger"
    data-slot="sidebar-trigger"
    variant="ghost"
    size="icon"
    :class="cn('h-7 w-7', props.class)"
    @click="toggleSidebar"
  >
    <Icon name="uil:align-left" />
    <span class="sr-only">Toggle Sidebar</span>
  </CNButton>
</template>
