var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);

module.exports = {
	entry: 
		'./client/app/app.js'
	,
	output: {
		path: __dirname+'/build',
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			//loads babel-loader to utilize es6 presets
			{ 
				test: /\.js$/, 
				loader: "babel-loader", 
				exclude: /(node_modules)/
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: '[name].chunck.js',
			minChunks: function( module, count ){
				console.log(module.resource);
				//compiles all other modules except for the ones in ./client folder
				//this will separate core-app(client folder) files from node_modules files
				return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
			}
		})
	],
	resolve:{
		modules: [
			path.resolve('./'),
			path.resolve('./node_modules')
		]
	}
}