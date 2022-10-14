/// <reference types="vitest" />
import vue from "@vitejs/plugin-vue";

export default {
  root: "demo",
  base: "/",
  optimizeDeps: {
    include: [],
  },
  assetsDir: "",
  plugins: [vue()],
  test: {
    include: ["../tests/**/*.{spec,test}.{js,cjs,mjs}"],
    environment: "happy-dom",
  },
};
