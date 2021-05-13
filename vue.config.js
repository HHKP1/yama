module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
	devServer: {
		proxy: {
			'^/api': {
				target: 'https://tala.cloudi.es/routes/9373315876/front/',
				ws: false,
				changeOrigin: true
			},
		}
	},
	productionSourceMap: false
}