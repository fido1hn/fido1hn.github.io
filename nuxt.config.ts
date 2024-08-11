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

  modules: ['@nuxtjs/google-fonts', '@nuxt/ui', '@nuxt/image'],

  googleFonts: {
    families: {
      Orbitron: '400..900',
      'Titillium Web': '200..700',
    },
  },

  colorMode: {
    classSuffix: '',
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/di5iopizb/image/upload/v1722940622/',
    },
  },

  routeRules: {
    '/portfolio': { redirect: '/' },
  },

  compatibilityDate: '2024-08-09',
});
