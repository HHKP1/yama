module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './' : './',
	devServer: {
		// headers: { "Access-Control-Allow-Origin": "*" },
		proxy: {
			'^/api': {
				target: 'https://tala.cloudi.es/',
				ws: false,
				changeOrigin: true,
				// secure: true,
				// pathRewrite: { '^/api': '/api' },
				// logLevel: 'debug'
			},
		}
	},
	outputDir: './public/',
	assetsDir: './assets',
	lintOnSave: false,
	productionSourceMap: false
}