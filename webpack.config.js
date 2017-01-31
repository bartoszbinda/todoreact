var webpack = require("webpack");
var path = require("path");
var CompressionPlugin = require("compression-webpack-plugin");

process.env.NODE_ENV =  process.env.NODE_ENV || "development";

module.exports = {
	entry: [
		"script!jquery/dist/jquery.min.js",
		"script!foundation-sites/dist/js/foundation.min.js", 
		"./app/app.jsx"
	],
	externals: {
		jquery: "jQuery"
	},
	plugins: [new webpack.ProvidePlugin({"$": "jquery", "jQuery": "jquery"})
,
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),

		new webpack.optimize.UglifyJsPlugin({
			mangle: true,
			compress: {
				warnings: false, // Suppress uglification warnings
				pure_getters: true,
				unsafe: true,
				unsafe_comps: true,
				screw_ie8: true
			},
			output: {
				comments: false,
			},
			exclude: [/\.min\.js$/gi] // skip pre-minified libs
		}),
		new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]), //https://stackoverflow.com/questions/25384360/how-to-prevent-moment-js-from-loading-locales-with-webpack
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0
		})
	],
	output: {
		path: __dirname,
		filename: "./public/bundle.js"
	},
	resolve: {
		root: __dirname,
		modulesDirectories: [
			"node_modules", "./app/components", "./api"
		],
		alias: {
			app: 'app',
			foundation: "foundation-sites/js/foundation.core",
			applicationStyles: "app/styles/app.scss",
			actions: "app/actions/actions.jsx",
			reducers: "app/reducers/reducers.jsx",
			configureStore: "app/store/configureStore.jsx"

		},
		extensions: ["", ".js", ".jsx"]
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-0", "stage-1"]
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	sassLoader: {
		includePaths: [path.resolve(__dirname, "./node_modules/foundation-sites/scss")]
	},
	//devtools: "cheap-module-source-map"   
    //devtool: 'eval'   //fastest
};
