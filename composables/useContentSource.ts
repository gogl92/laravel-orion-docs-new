export const useContentSource = () => {
  const route = useRoute()
  const router = useRouter()

  const versions = computed(() => [{
    name: 'latest',
    label: 'v2.22.3',
    icon: 'i-heroicons-cube',
    suffix: `latest`,
    click: () => select({ name: 'latest' })
  }, {
    name: 'deprecated',
    label: 'v1.2.9',
    icon: 'i-heroicons-cube-transparent',
    suffix: 'deprecated',
    click: () => select({ name: 'deprecated' })
  }])

  const version = computed(() => versions.value.find(b => b.name === (route.path.startsWith('/v1.x') ? 'deprecated' : 'latest')))

  function select(v) {
    if (v.name === version.value.name) {
      return
    }

    if (v.name === 'deprecated') {
      router.push('/v1.x/guide')
      return
    }

    if (version.value.name === 'deprecated') {
      if (v.name === 'deprecated') {
        router.push('/v1.x/guide')
      } else {
        router.push('/guide')
      }

      return
    }
  }

  return {
    versions,
    version
  }
}
