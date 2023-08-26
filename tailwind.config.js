/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				'custom-gray': 'rgba(119, 119, 119, 0.781)',
			  },
			keyframes: {
				fadeIn: {
					from: {
						opacity: 0
					},
					to: {
						opacity: 1
					}
				}
			},
			animation: {
				fade: 'fadeIn .5s ease-in-out',
			},
			content: {
				sendHome: ['url("svg/send-home.svg")'],
				iconHome: ['url("svg/icon-home.svg")'],
				iconMen: ['url("svg/home-men.svg")']
			}
		}
	},
	plugins: []
}
