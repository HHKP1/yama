module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	devServer: {
		// clientLogLevel: 'info',
		// proxy: 'http://localhost:8080',
		proxy: {
			'^/api': {
				target: 'https://tala.cloudi.es/routes/95a4b653d1/',
				ws: false,
				changeOrigin: true
			},
		}
	},
	outputDir: './public/',
	assetsDir: './assets',
	lintOnSave: false,
	productionSourceMap: false
}