// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss"],
  css: ["~/assets/global.css"],
  image: {
    quality: 80,
    format: ["webp"],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
    densities: [1, 2],
  },
  app: {
    head: {
      noscript: [
        { children: 'JavaScript is required' }
      ],
      htmlAttrs: {
        lang: 'en',
      },
      title: "Thinh Nguyen | Photography",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
})