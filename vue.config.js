module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './' : './',
	devServer: {
		// headers: { "Access-Control-Allow-Origin": "*" },
		proxy: {
			'^/api': {
				target: 'https://tala.cloudi.es/routes/95a4b653d1/',
				ws: false,
				changeOrigin: true,
				// secure: true,
				// pathRewrite: { '^/api': 'https://tala.cloudi.es/routes/95a4b653d1/api' },
				// logLevel: 'debug'
			},
		}
	},
	outputDir: './public/',
	assetsDir: './assets',
	// lintOnSave: false,
	productionSourceMap: false
}