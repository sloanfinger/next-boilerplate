const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'media',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Cabin', ...defaultTheme.fontFamily.sans],
				serif: ['Vollkorn', ...defaultTheme.fontFamily.serif],
				mono: ['Cascadia Code', ...defaultTheme.fontFamily.mono]
			}
		},
	},
	plugins: [],
};
