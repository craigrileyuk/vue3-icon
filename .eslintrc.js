module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:jsdoc/recommended",
    "prettier",
  ],
  plugins: ["jsdoc"],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "vue/no-v-html": "off",
    "vue/multi-word-component-names": "off",
  },
  globals: {
    $: "readonly",
    $$: "readonly",
    $ref: "readonly",
    $computed: "readonly",
    defineEmits: "readonly",
    defineProps: "readonly",
    defineExpose: "readonly",
  },
  ignorePatterns: [],
};
