import { h, computed } from "vue";
import { svgStyle, pathStyle } from "./style.js";
import { iconSettings } from "./iconSettings.js";

/**
 * Generate the vNode to go inside the SVG element
 */
const Path = {
    props: {
        type: {
            type: String,
            required: true
        },
        path: {
            type: [String, Object, Array],
            required: false
        },
        pathString: {
            type: [Array, String, Object],
            required: false
        }
    },
    setup(props) {
        return () => {
            if (props.type === "fad") {
                console.warn("vue3-icon does not currently support Duotone FontAwesome icons");
                return h("path");
            } else if (Array.isArray(props.path)) {
                return h(
                    "g",
                    { style: { ...pathStyle } },
                    props.path.map((d) => {
                        return typeof d === "string" ? h("path", { d }) : h("path", { ...d });
                    })
                );
            } else {
                return h("path", { d: props.pathString, style: { ...pathStyle } });
            }
        };
    }
};

export default {
	name: "icon",
	props: {
		/**
		 * The icon type, e.g. mdi or simple-icons
		 */
		type: {
			type: String,
			default: "mdi"
		},
		/**
		 * The FontAwesome icon object
		 */
		faIcon: {
			type: Object,
			default: null
		},
		/**
		 * The svg path for the icon
		 */
		path: {
			type: [String, Object, Array]
		},
		/**
		 * The size of the icon when rendered in the browser
		 */
		size: {
			type: [Number, String],
			default: 24
		},
		/**
		 * The SVG viewbox, affects path position, but not render size
		 */
		viewbox: {
            type: String,
            required: false
        },
		/**
		 * Flip the icon either horizontally, vertically, or both
		 */
		flip: {
			type: String,
            default: "",
			validator: (value) => ["", "horizontal", "vertical", "both"].includes(value)
		},
		/**
		 * Rotate the icon
		 */
		rotate: {
			type: [Number, String],
			default: 0
		},
        /**
         * Don't add the XML namespace attribute
         */
        noNamespace: {
            type: Boolean,
            default: false
        },
        /**
         * Don't add any styles to SVG, disables flip and rotate
         */
        noStyles: {
            type: Boolean,
            default: false
        },
        /**
         * Don't add any styles to SVG, disables flip and rotate
         */
        noDimensions: {
            type: Boolean,
            default: false
        }
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
            if (props.noStyles === true) return undefined;
			else return {
				...svgStyle,
				"--sx": ["both", "horizontal"].includes(props.flip) ? "-1" : "1",
				"--sy": ["both", "vertical"].includes(props.flip) ? "-1" : "1",
				"--r": isNaN(rotateValue.value) ? rotateValue.value : rotateValue.value + "deg"
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
		 * Return the vNode render function
		 */
		return () => {
			return h(
				"svg",
				{
                    xmlns: props.noNamespace !== true ? "http://www.w3.org/2000/svg" : undefined,
					style: generatedStyle.value,
					class: ["vue3-icon"],
					width: props.noDimensions !== true ? sizeValue.value : undefined,
					height: props.noDimensions !== true ? sizeValue.value : undefined,
					viewBox: viewboxValue.value,
				},
				[h(Path, { path: props.path, type: type.value, pathString: pathValue.value })]
			);
		};
	}
};
