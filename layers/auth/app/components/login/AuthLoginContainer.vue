<script setup lang="ts">

</script>

<template>
  <UIPageContainer wrapper-class="max-w-lg">
    <div class="flex flex-col gap-1">
      <h1 class="inline-flex items-center gap-1 self-center text-2xl">
        {{ $t('appConfig.name') }}

        <UIIcon name="uil:globe" size="3xl" />
      </h1>

      <CNSeparator />
    </div>

    <div class="flex flex-col gap-2">
      <span class="inline-flex self-center text-lg">
        {{ $t('authLayer.login.title') }}
      </span>

      <AuthLoginForm />
    </div>
  </UIPageContainer>
</template>
