// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel-edge',
  },
  app: {
    head: {
      title: 'Portfolio - Archie Galangue',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  runtimeConfig: {
    public: {
      apiBase: ''
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '@/assets/css/main.scss',
    '@/assets/css/tailwind.css'
  ],
  plugins: [
    '~/plugins/gsap.js'
  ]
})
