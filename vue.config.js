module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/routes/9373315876/front/index.html' : '/',
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
}