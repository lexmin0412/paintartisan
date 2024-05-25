const tailwindEllipsisPlugin = require('./plugin-ellipsis')
const tailwindExtendSizePlugin = require('./plugin-extend-size')
const tailwindSyncLeadingWithHeightPlugin = require('./plugin-sync-leading-with-height')

const colors = {
	title: '#3f4561',
	desc: '#9dA2B2',
	disabled: '#b3b8c1',
	eb: '#ebebeb',
	warning: '#eF6A17',
	theme: '#4d86ee',
	error: '#ff4a4a'
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.html', './src/**/*.{js,ts,jsx,tsx,html}'],
	theme: {
		extend: {
			colors,
		},
	},
	plugins: [
		tailwindEllipsisPlugin,
		tailwindExtendSizePlugin,
		tailwindSyncLeadingWithHeightPlugin,
	],
}
