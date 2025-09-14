// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  alias: {
    '@styles': '/<rootDir>/styles',
  },
  css: ['@/styles/main.scss'],
});
