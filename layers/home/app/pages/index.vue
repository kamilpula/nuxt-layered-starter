<script setup lang="ts">
definePageMeta({
  name: 'home',
})

const { t } = useI18n()

useHead({
  title: t('homeLayer.page.home.meta.title'),
})
</script>

<template>
  <div class="flex w-full justify-center">
    home
  </div>
</template>
