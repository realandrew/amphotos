// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
    }
  }
})
