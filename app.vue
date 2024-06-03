<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { seo } = useAppConfig()

const { data: nav } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})
const { version } = useContentSource()

const navigation = computed(() => {
  if (version.value.name === 'latest') {
    return nav.value?.filter(item => item._path !== '/v1.x') || []
  }

  return nav.value?.filter(item => item._path === '/v1.x').flatMap(item => item.children) || []
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  twitterCard: 'summary_large_image'
})

provide('navigation', navigation)
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="white" />

    <Banner />

    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>

    <UNotifications />
  </div>
</template>
