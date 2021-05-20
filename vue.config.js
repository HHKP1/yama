module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
	// devServer: {
	// 	clientLogLevel: 'info',
	// 	proxy: 'http://localhost:8080',
	// 	// proxy: {
	// 	// 	'^/api': {
	// 	// 		target: 'https://tala.cloudi.es/routes/9373315876/front/',
	// 	// 		ws: false,
	// 	// 		changeOrigin: true
	// 	// 	},
	// },
	outputDir: './public/',
	assetsDir: '/routes/9373315876/front/asstes',
	lintOnSave: false,
	productionSourceMap: false
}