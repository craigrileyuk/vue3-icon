import jsdoc from 'eslint-plugin-jsdoc';
import configPrettier from "eslint-config-prettier";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import js from "@eslint/js";

export default [
    jsdoc.configs['flat/recommended'],
	js.configs.recommended,
	...pluginVue.configs["flat/recommended"],
	configPrettier,
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
        plugins: {
            jsdoc
        }
	},
];

