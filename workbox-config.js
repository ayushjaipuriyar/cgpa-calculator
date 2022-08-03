module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{ico,png,html,js,css}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};