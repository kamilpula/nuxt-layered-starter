<script lang="ts" setup>
import type { NuxtLinkProps } from 'nuxt/app'

interface Props extends NuxtLinkProps {}

const props = defineProps<Props>()

const localePath = useLocalePath()

const linkTo = computed(() => {
  if (typeof props.to === 'string') {
    return localePath(props.to)
  }

  return localePath({ ...props.to })
})
</script>

<template>
  <NuxtLink :to="linkTo" v-bind="{ attrs: $attrs }" :target>
    <slot />
  </NuxtLink>
</template>
