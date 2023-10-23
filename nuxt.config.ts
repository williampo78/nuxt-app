// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
  googleFonts: {
    families: {
      'Inter': true,
    }
  }
})