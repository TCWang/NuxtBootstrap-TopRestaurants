// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image-edge", "@vueuse/nuxt"],

  app: {
    head: {
      title: "Nuxt3 Bootstrap - TopRestaurants",
      meta: [
        {
          name: "description",
          content: "Nuxt 3 Bootcamp Practice - TopRestaurants",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
});
