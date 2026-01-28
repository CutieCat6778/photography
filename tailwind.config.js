/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./components/**/*.{vue,js,ts}",
		"./layouts/**/*.{vue,js,ts}",
		"./pages/**/*.{vue,js,ts}",
		"./composables/**/*.{js,ts}",
		"./app.vue",
	],
	theme: {
		extend: {
			colors: {
				white: "#F2EFE5",
				black: "#141415",
				gray: {
					DEFAULT: "#141415",
					50: "#f9f9f9",
					100: "#f0f0f0",
					200: "#e0e0e0",
					300: "#c7c8cc",
					400: "#a0a0a0",
					500: "#707070",
					600: "#505050",
					700: "#303030",
					800: "#202020",
					900: "#141415",
					950: "#0a0a0b",
				},
			},
		},
	},
	plugins: [],
};
