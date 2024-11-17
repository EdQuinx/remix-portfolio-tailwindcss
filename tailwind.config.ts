import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'"Jost"',
					"sans-serif",
				],
			},
			boxShadow: {
				'contact-normal': '6px 6px 0px -1px var(--dark-color)',
				'contact-hover': '6px 6px 0px -1px var(--primary-color)',
			},
			keyframes: {
				slideDown: {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(0)' },
				},
			},
			animation: {
				slideDown: 'slideDown 0.5s ease-in-out',
			},
		},
	},
	plugins: [require('tailwindcss-motion')],
} satisfies Config;