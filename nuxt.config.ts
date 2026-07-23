// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro:{
    // https://nitro.build/deploy/workers
    // preset: 'node-server'
  },
  runtimeConfig: {
    db: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || '3306',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      name: process.env.DB_NAME || ''
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
