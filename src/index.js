import { h, computed } from "vue";
import "./style.scss";

const iconSettings = {
	mdi: {
		size: 24,
		viewbox: "0 0 24 24",
	},
	"simple-icons": {
		size: 24,
		viewbox: "0 0 24 24",
	},
	default: {
		size: 0,
		viewbox: "0 0 0 0",
	},
};

export default {
	name: "icon",
	props: {
		type: String,
		path: {
			type: String,
			required: true,
		},
		size: {
			type: Number,
			default: 24,
		},
		viewbox: String,
		flip: {
			type: String,
			validator: (value) => ["horizontal", "vertical", "both"].includes(value),
		},
		rotate: {
			type: Number,
			default: 0,
		},
	},
	setup(props, context) {
		const generatedStyle = computed(() => {
			return {
				"--sx": ["both", "horizontal"].includes(props.flip) ? "-1" : "1",
				"--sy": ["both", "vertical"].includes(props.flip) ? "-1" : "1",
				"--r": isNaN(props.rotate) ? props.rotate : props.rotate + "deg",
			};
		});
		const defaults = computed(() => iconSettings[props.type] || iconSettings.default);
		const sizeValue = computed(() => props.size || defaults.value.size);
		const viewboxValue = computed(() => props.viewbox || defaults.value.viewbox);

		return () => {
			const path = h("path", { d: props.path });

			return h(
				"svg",
				{
					style: generatedStyle.value,
					class: ["vue3-icon"],
					width: sizeValue.value,
					height: sizeValue.value,
					viewBox: viewboxValue.value,
				},
				[path]
			);
		};
	},
};

output.exports = "default";
