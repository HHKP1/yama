module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	devServer: {
		proxy: {
			'^/routes': {
				target: 'https://tala.cloudi.es/',
				ws: false,
				changeOrigin: true,
				// secure: true,
				// logLevel: 'debug'
			},
		}
	},
	// module: {
	// 	test: /\.(ttf|otf|eot|woff|woff2)$/,
	// 	use: {
	// 		loader: "file-loader",
	// 		options: {
	// 			name: "fonts/[name].[ext]",
	// 		}
	// 	}
	// },
	// outputDir: './dist/',
	assetsDir: './assets',
	// lintOnSave: false,
	productionSourceMap: false,
	runtimeCompiler: true
}