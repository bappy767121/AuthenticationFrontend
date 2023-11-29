
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/public/style.css',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Authentecitor',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  }

})


