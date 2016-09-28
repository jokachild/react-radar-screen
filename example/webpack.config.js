var path = require("path");
var webpack = require("webpack");

module.exports = {

    entry: path.resolve(__dirname, "index.js"),

    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js"
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "babel", exclude: /node_modules/}
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify("development")
        })
    ]

};
