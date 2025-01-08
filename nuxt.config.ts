// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxt/icon'
  ],
  googleFonts:{
    families:{
      Montserrat:true,
    },
  },

  app: {
    baseURL: '/GithubPagesTest/', // 确保路径正确
    buildAssetsDir: '/_nuxt/', // 静态资源路径
  },
  target: 'static',

})