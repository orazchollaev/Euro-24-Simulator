// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: ['@pinia/nuxt'],

  css: ['~/assets/styles/global.scss'],
})
