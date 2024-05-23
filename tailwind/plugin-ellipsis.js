const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, matchUtilities, theme }) => {
	addUtilities({
		'.ellipsis': {
			'overflow': 'hidden',
			'text-overflow': 'ellipsis',
			'white-space': 'nowrap'
		},
	}),
		matchUtilities(
			{
				ellipsis: (value) => {
					return {
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						display: '-webkit-box',
						'-webkit-line-clamp': value,
						'-webkit-box-orient': 'vertical'
					}
				}
			},
			{
				values: theme('lineClamp')
			}
		)
})
