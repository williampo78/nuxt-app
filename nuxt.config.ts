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
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@pinia/nuxt', 'nuxt-swiper', '@nuxt/image','dayjs-nuxt'],
  pinia: {
    storesDirs: ['./store/**.ts', './store/**.js'],
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