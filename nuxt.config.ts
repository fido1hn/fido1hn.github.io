// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    baseURL: '',
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
  ],

  googleFonts: {
    families: {
      Orbitron: '400..900',
      'Titillium Web': '200..700',
    },
  },

  content: {
    highlight: {
      theme: {
        default: 'min-light',
        dark: 'min-dark',
      },
    },
  },

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },

  routeRules: {
    '/portfolio': { redirect: '/' },
  },

  compatibilityDate: '2024-08-09',
});
