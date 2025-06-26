<script setup lang="ts">
import { PAGES } from '~~/constants/page/pages'

const { getLocalePath } = useLocaleNavigation()
</script>

<template>
  <header class="bg-background/75 sticky top-0 z-50 -mb-px border-b border-gray-200 backdrop-blur lg:mb-0 lg:border-0 dark:border-gray-800">
    <div class="mx-auto flex h-16 w-full max-w-7xl flex-1 items-center gap-3 px-4 sm:px-6 lg:px-8">
      <div>
        <NuxtLink
          :to="getLocalePath(PAGES.home())"
          class="text-sm font-semibold hover:text-primary"
        >
          Home
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
