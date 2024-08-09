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
  ],

  googleFonts: {
    families: {
      Orbitron: '400..900',
      Titillium: '200..900',
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