var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: __dirname + '/distr',
	entry: {
		vendor: './vendor.js',
		app: './main.js'
	},
	output:{
		path: './views/js/',
		filename: '[name].js',
		staticPath: '/',
		publicPath: '/'
	},
	module:{
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
                    presets: ['es2015']
                }
			},
			{
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url-loader?name=/[path][name].[ext]?limit=10000"
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
		]
	},
	plugins: [
        new ExtractTextPlugin("custom.css"),
    ]
}