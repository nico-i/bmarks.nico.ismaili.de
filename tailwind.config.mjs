/** @type {import('tailwindcss').Config} */
export default {
	darkMode: `selector`,
	content: [`./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}`],
	theme: {
		colors: {
			bg: `#eee8d5`,
			text: `#1f2023`,
			dark: {
				bg: `#1f2023`,
				text: `#eee8d5`,
			},
		},
		extend: {},
	},
	plugins: [],
};
