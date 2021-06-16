import vue from "@vitejs/plugin-vue";

export default {
	root: "demo",
	base: "/",
	optimizeDeps: {
		include: [],
	},
	assetsDir: "",
	plugins: [vue()],
};
