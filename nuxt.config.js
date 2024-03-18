// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt3-meta-pixel',
  ],
  css: ['@/styles/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  swiper: {

  },
  plugins: [
    { src: '~/plugins/fontawesome', ssr: false },
  ],
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '7260785620672399',
    autoPageView: true,
    disabled: false
  },
})
