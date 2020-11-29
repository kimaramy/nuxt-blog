export default {
	srcDir: 'client',
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'Nuxt.js Blog',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'fonts.googleapis.com/css?family=Noto+Sans+KR' },
		],
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: ['~/assets/styles/global.css'],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		// https://go.nuxtjs.dev/stylelint
		'@nuxtjs/stylelint-module',
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: ['@nuxtjs/style-resources'],

	// Modules - @nuxtjs/style-resources (https://www.npmjs.com/package/@nuxtjs/style-resources)
	styleResources: {
		// your settings here
		scss: ['~/assets/styles/*.scss'],
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {},
};
