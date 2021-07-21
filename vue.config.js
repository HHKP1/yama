module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	devServer: {
		headers: {
			"Access-Control-Allow-Origin": "*",
			'Set-Cookies': {
				'name': 'yamasession',
				'sessionId': '90d5dee0-1b91-408f-8a93-52e1cff49489'
			}
		},
		proxy: {
			'^/api': {
				target: 'https://tala.cloudi.es/routes/95a4b653d1/api',
				ws: false,
				changeOrigin: true,
				// secure: true,
				// pathRewrite: { '^/api': 'https://tala.cloudi.es/routes/95a4b653d1/api' },
				// logLevel: 'debug'
			},
		}
	},
	outputDir: './dist/',
	// assetsDir: './assets',
	// lintOnSave: false,
	productionSourceMap: false
}