<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()

const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
  identifierAttribute: 'id',
})
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <Title>{{ t(route.meta.title as string ?? 'TBD') }}</Title>

        <template v-for="link in head.link" :key="link.id">
          <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>

        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
      </Head>

      <Body>
        <header>default header</header>

        <main class="min-h-16 py-2">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <slot />
          </div>
        </main>

        <footer>default footer</footer>
      </Body>
    </Html>
  </div>
</template>
