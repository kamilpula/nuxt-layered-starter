<script setup lang="ts">
import { isVNode } from 'vue'

const { toasts } = useToast()
</script>

<template>
  <CNToastProvider>
    <CNToast v-for="toast in toasts" :key="toast.id" v-bind="toast">
      <div class="grid w-full gap-1">
        <CNToastTitle v-if="toast.title">
          {{ toast.title }}
        </CNToastTitle>

        <template v-if="toast.description">
          <CNToastDescription v-if="isVNode(toast.description)">
            <component :is="toast.description" />
          </CNToastDescription>

          <CNToastDescription v-else>
            {{ toast.description }}
          </CNToastDescription>
        </template>

        <CNToastClose />
      </div>

      <component :is="toast.action" />
    </CNToast>

    <CNToastViewport />
  </CNToastProvider>
</template>
