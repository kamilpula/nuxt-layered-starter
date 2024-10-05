<script setup lang="ts">
definePageMeta({
  title: 'authLayer.page.login.title',
})
const { $vp } = useNuxtApp()
</script>

<template>
  <div>
    <h1>{{ $t('authLayer.page.login.title') }}</h1>

    {{ $vp.isDesktop }}
    {{ $vp.isTablet }}
    {{ $vp.isMobile }}
  </div>
</template>
