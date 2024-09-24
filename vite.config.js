/// <reference types="vitest" />
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";

export default {
	plugins: [vue()],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.js"),
			name: "Vue3Icon",
			formats: ["es", "umd", "cjs","iife"]
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue" 
				}
			}
		}
	},
    test: {
		include: ["./tests/**/*.{spec,test}.{js,cjs,mjs}"],
		environment: "happy-dom"
	}
};
