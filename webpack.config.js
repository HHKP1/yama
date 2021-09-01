module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
				loader: "url?limit=10000&mimetype=application/font-woff",
				// More information here https://webpack.js.org/guides/asset-modules/
				type: "asset",
			},
		],
	},
};