const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Nunito', ...defaultTheme.fontFamily.sans],
			},
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('tailwind-scrollbar'),
		require("daisyui"),
	],
}
