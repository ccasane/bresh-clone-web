// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['@/styles/main.scss'],
  alias: {
    '@styles': '/app/styles',
    '@componets': '/app/components',
    '@layout': '/app/layout',
    '@data': '/app/data',
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
