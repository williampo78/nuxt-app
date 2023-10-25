// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: process.env.APP_BASE_URL || ''
    }
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/css/main.scss',
  ],
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@pinia/nuxt'],
  pinia: {
    storesDirs: ['./store/**'],
  },
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
  googleFonts: {
    families: {
      'Inter': true,
    }
  }
})