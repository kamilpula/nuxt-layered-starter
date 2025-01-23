<script setup lang="ts">
definePageMeta({
  name: 'login',
  middleware: 'unauth',
})

const { t } = useI18n()

useHead({
  title: t('authLayer.page.login.title'),
},
)
</script>

<template>
  <AuthLoginContainer />
</template>
