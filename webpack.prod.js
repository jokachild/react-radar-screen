var path = require("path");
var webpack = require("webpack");

module.exports = {

    entry: path.resolve(__dirname, "src/index.js"),

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        libraryTarget: "commonjs2"
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "babel", exclude: /node_modules/},
            { test: /\.scss$/, loader: "css!sass"}
        ]
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify("production")
        })
    ],

    externals: [ /^react/, /^lodash/ ]

};
