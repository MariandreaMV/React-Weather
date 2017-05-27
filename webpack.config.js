
module.exports = {
	output:{
		path: __dirname,
		filename:'./public/bundle.js'
	},
	resolve:{
		root: __dirname,
		alias:{
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			Weather: 'app/components/Weather.jsx',
			About:'app/components/About.jsx',
			Examples:'app/components/examples.jsx',
			openWeatherMap: 'app/api/openWeatherMap.jsx'
		},
		extensions: ['','.js','.jsx']
	},
	module:{
		loaders:[{
			loader: 'babel-loader',
			query:{
				presets:['react','es2015']
			},
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/
		}]
	},
	devtool:'cheap-module-eval-source-map'//en el developertools solo muestra el archivo donde coloque el debugger
};

module.exports.entry="./app/app.jsx";
