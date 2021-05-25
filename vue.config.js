module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './' : './',
	devServer: {
		proxy: {
			'^/api': {
				target: 'https://tala.cloudi.es/',
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