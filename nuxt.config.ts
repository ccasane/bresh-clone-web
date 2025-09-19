// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['@/assets/styles/main.scss'],
  alias: {
    '@styles': '/assets/styles',
    '@components': '/components',
    '@layout': '/layout',
    '@data': '/data',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@styles/variables.scss" as *;`,
        },
      },
    },
  },
});
