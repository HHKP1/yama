var path = require('path')

module.exports = {
	entry: {
		app: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist/static'),
		publicPath: '/static/',
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		alias: {
			'src': path.resolve(__dirname, '../src')
		}
	},
	resolveLoader: {
		root: path.join(__dirname, 'node_modules')
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
				loader: 'babel!eslint',
				exclude: /node_modules/
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff"
			}
		]
	}
}