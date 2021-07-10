module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	devServer: {
		headers: { "Access-Control-Allow-Origin": "*" },
		proxy: {
			'^/api': {
				target: 'http://localhost:8080',
				ws: false,
				changeOrigin: true,
				secure: true,
				pathRewrite: { '^/api': 'https://tala.cloudi.es/routes/95a4b653d1/' },
				logLevel: 'debug'
			},
		}
	},
	// outputDir: './dist/',
	// assetsDir: './assets',
	// lintOnSave: false,
	productionSourceMap: false
}