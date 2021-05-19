module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/' : '/src/public/',
	devServer: {
		clientLogLevel: 'info',
		proxy: 'http://localhost:8080',
		// proxy: {
		// 	'^/api': {
		// 		target: 'https://tala.cloudi.es/routes/9373315876/front/',
		// 		ws: false,
		// 		changeOrigin: true
		// 	},
	},
	outputDir: './public/',
	assetsDir: './assets/',
	lintOnSave: false,
	productionSourceMap: false
	// pages: {
	// 	index: {
	// 		entry: 'src/main.js',
	// 		template: 'src/public/index.html',
	// 		filename: 'index.html',
	// 	},
	// },
}