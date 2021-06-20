import { h, computed } from "vue";
import { svgStyle, pathStyle } from "./style";
import { iconSettings } from "./iconSettings";

export default {
	name: "icon",
	props: {
		/**
		 * The icon type, e.g. mdi or simple-icons
		 */
		type: String,
		/**
		 * The FontAwesome icon object
		 */
		faIcon: Object,
		/**
		 * The svg path for the icon
		 */
		path: {
			type: [String, Object],
		},
		/**
		 * The size of the icon when rendered in the browser
		 */
		size: {
			type: [Number, String],
			default: 24,
		},
		/**
		 * The SVG viewbox, affects path position, but not render size
		 */
		viewbox: String,
		/**
		 * Flip the icon either horizontally, vertically, or both
		 */
		flip: {
			type: String,
			validator: (value) => ["horizontal", "vertical", "both"].includes(value),
		},
		/**
		 * Rotate the icon
		 */
		rotate: {
			type: [Number, String],
			default: 0,
		},
	},
	setup(props) {
		/**
		 * Check if a valid icon path, or icon object has been given. If not, warn, then render a blank div
		 */
		if (!props.path && !props.faIcon) {
			console.warn("vue3-icon requires either a 'path' or an 'fa-icon' property");
			return () => h("div");
		}

		/**
		 * The processed value of the icon type
		 */
		const type = computed(() => props.faIcon?.prefix || props.type);

		/**
		 * The processed value of the rotate prop
		 */
		const rotateValue = computed(() => parseInt(props.rotate, 10));

		/**
		 * Default icon settings to use when none are provided via props
		 */
		const defaults = computed(() => iconSettings[type.value] || iconSettings.default);

		/**
		 * The processed value of the size prop
		 */
		const sizeValue = computed(() => parseInt(props.size, 10) || defaults.value.size);

		/* ******************************************
		 * SVG Viewbox
		 ****************************************** */
		/**
		 * If a FontAwesome object is provided, grab the viewbox dimensions from it (these vary per icon)
		 */
		const faViewbox = computed(() => {
			if (!props.faIcon) return false;
			else return `0 0 ${props.faIcon.icon[0]} ${props.faIcon.icon[1]}`;
		});

		/**
		 * The processed value of the svg viewbox
		 */
		const viewboxValue = computed(() => faViewbox.value || props.viewbox || defaults.value.viewbox);

		/**
		 * Dynamically generated styles that will be applied to the svg element
		 */
		const generatedStyle = computed(() => {
			return {
				...svgStyle,
				"--sx": ["both", "horizontal"].includes(props.flip) ? "-1" : "1",
				"--sy": ["both", "vertical"].includes(props.flip) ? "-1" : "1",
				"--r": isNaN(rotateValue.value) ? rotateValue.value : rotateValue.value + "deg",
			};
		});

		/* ******************************************
		 * Path Element
		 ****************************************** */
		/**
		 * If a FontAwesome or Simple Icons object is provided, extract the path, otherwise use the path prop
		 */
		const pathValue = computed(() => {
			if (props.faIcon) return props.faIcon?.icon[4];
			else if (props.type === "simple-icons" && typeof props.path === "object") {
				return props.path.path;
			} else return props.path;
		});

		/**
		 * Generate the vNode to go inside the SVG element
		 */
		const inner = computed(() => {
			if (type.value === "fad") {
				console.warn("vue3-icon does not currently support Duotone FontAwesome icons");
				return h("path");
			} else return h("path", { d: pathValue.value, style: { ...pathStyle } });
		});

		/**
		 * Return the vNode render function
		 */
		return () => {
			return h(
				"svg",
				{
					style: generatedStyle.value,
					class: ["vue3-icon"],
					width: sizeValue.value,
					height: sizeValue.value,
					viewBox: viewboxValue.value,
				},
				[inner.value]
			);
		};
	},
};
