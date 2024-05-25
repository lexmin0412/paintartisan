const plugin = require('tailwindcss/plugin')

/**
 * 生成和 height 相同的 leading 属性
 */
module.exports = plugin(({matchUtilities, theme }) => {
	matchUtilities(
		{
			leading: (value) => {
				return {
					lineHeight: value,
				}
			}
		},
		{
			values: theme('height')
		}
	)
})
