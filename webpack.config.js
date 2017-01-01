module.exports = {
	context: __dirname + '/distr',
	entry: {
		vendor: ['angular'],
		app: './main.js'
	},
	output:{
		path: './public/js',
		filename: '[name].js',
		staticPath: '/',
		publicPath: '/'
	},
	module:{
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel'
			}
		]
	}
}