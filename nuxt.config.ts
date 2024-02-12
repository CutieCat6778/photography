const description = "A personal photography portfolio, that showcase Thinh\' works over the times"
const title = "Thinh Nguyen | Photography"
const domain = "https://thinis.de"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
  },
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
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'fb:type',
          property: 'fb:type',
          content: domain
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: title
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: domain
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'twitter:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.thinis.de/_vercel/image?url=%2Fsection%2Ffinal-1-2.webp&w=1280&q=80',
        },
        {
          hid: 'twitter:image',
          property: 'og:image',
          content: 'https://www.thinis.de/_vercel/image?url=%2Fsection%2Ffinal-1-2.webp&w=1280&q=80',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'index, follow'
        },
        {
          name: 'msapplication-TileColor',
          content: '#141415'
        },
        {
          name: 'theme-color',
          content: '#141415'
        }
      ],
      title: "Thinh Nguyen | Photography",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
})