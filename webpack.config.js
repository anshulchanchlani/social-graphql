var webpack = require('webpack');
var path = require('path');

module.exports ={
	entry:__dirname+ '/views/app.jsx',
	output:{
		filename: __dirname +'/views/static/bundle.js'
	},
	module:{
		loaders:[
			{
			test:/\.jsx$/,
			loader:'babel-loader',
			query:{
				presets:['es2015','stage-0','react']
			},
			exclude:__dirname+'/node_modules'
			}
		]
	},
	resolve:{
		extensions:['','.js','.jsx']
	}
}