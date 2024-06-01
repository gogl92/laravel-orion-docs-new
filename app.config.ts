export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'Orion for Laravel - The simplest way to create REST API with Laravel'
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/tailflow/laravel-orion',
      'target': '_blank',
      'aria-label': 'Orion for Laravel on GitHub'
    }]
  },
  footer: {
    credits: 'Copyright © 2019-2024 Aleksei Zarubin',
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-x',
      'to': 'http://x.com/alexzarbn',
      'target': '_blank',
      'aria-label': 'Orion for Laravel creator on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/tailflow/laravel-orion',
      'target': '_blank',
      'aria-label': 'Orion for Laravel on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/tailflow/laravel-orion-docs/edit/main/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/tailflow/laravel-orion',
        target: '_blank'
      }]
    }
  }
})
