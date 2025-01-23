<script setup lang="ts">

</script>

<template>
  <div>
    <LayoutDefaultHeader />

    <main class="min-h-screen py-2">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>

    <LayoutDefaultFooter />
  </div>
</template>
