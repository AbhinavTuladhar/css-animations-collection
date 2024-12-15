// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/scss/main.scss"],
});
