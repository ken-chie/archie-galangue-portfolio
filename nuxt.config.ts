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
      link: [{ rel: 'icon', type: 'image/png', href: "/favicon.ico" }]
    }
  },
  runtimeConfig: {
    apiBase: process.env.BASE_URL,
    public: {
      apiBase: process.env.BASE_URL
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  css: [
    '@/assets/css/main.scss',
    '@/assets/css/tailwind.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
    
  ],
  plugins: [],
  typescript: {
    typeCheck: true,
    strict: true
  }
})
