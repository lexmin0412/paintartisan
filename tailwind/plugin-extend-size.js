const plugin = require('tailwindcss/plugin');

/**
 * 生成 100 ~ 1200px 的 width 和 height
 */
module.exports = plugin(function ({ addUtilities }) {
	const utilities = {
		// 动态生成 100 ~ 1000px 的 width 和 height
		...Array.from({ length: 12 }, (_, i) => i + 1).reduce(
			(acc, val) => ({
				...acc,
				[`.w-${25 * val}`]: { width: `${25 * val / 4}rem` },
				[`.h-${25 * val}`]: { height: `${25 * val / 4}rem` },
			}),
			{}
		),
	};
	addUtilities(utilities);
})
