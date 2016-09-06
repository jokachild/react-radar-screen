var path = require("path");
var webpack = require("webpack");

module.exports = {

    entry: path.resolve(__dirname, "src/demo.js"),

    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/static/",
        filename: "index.js"
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "babel", exclude: /node_modules/},
            { test: /\.scss$/, loader: "style!css!sass"}
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify("development")
        })
    ],

    devtool: "sourcemap",

    devServer: {
        port: 8000
    }
};
