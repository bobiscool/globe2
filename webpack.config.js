var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ExtractTextScss = new ExtractTextPlugin('main.css');

module.exports = {
    entry: ["./static/js/index.js", 'webpack-dev-server/client?http://0.0.0.0:8080'],
    output: {
        path: "./public",
        filename: "all.js"
    },
    module: {
        loaders: [
            {test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, loader: "url-loader?limit=8192"},
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!sass!autoprefixer")
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015']
                }
            }
        ]

    },
    plugins: [ExtractTextScss],
    postcss: [autoprefixer({browsers: ['last 2 versions']})]

}


