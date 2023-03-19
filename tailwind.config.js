/** @type {import('tailwindcss').Config} */

const daisy = require('daisyui')

const childrenSupport = ({ addVariant }) => {
	addVariant('child', '& > *')
	addVariant('child-hover', '& > *:hover')
}

module.exports = {
	darkMode: 'class',
	content: [
		'./node_modules/flowbite/**/*.js',
		'./node_modules/flowbite-react/**/*.js',
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {}
	},

	daisyui: {
		styled: true,
		themes: [
			{
				light: {
					...require('daisyui/src/colors/themes')['[data-theme=light]']
				}
			}
		],
		base: true,
		utils: true,
		logs: true,
		rtl: false,

		prefix: ''
	},
	plugins: [require('flowbite/plugin'), daisy, childrenSupport]
}
