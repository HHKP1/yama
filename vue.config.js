module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
	devServer: {
		proxy: {
			'^/api': {
				target: 'https://tala.cloudi.es/',
				ws: false,
				changeOrigin: true
			},
		}
	},
	productionSourceMap: false
}