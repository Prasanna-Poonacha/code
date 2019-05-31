const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', //inject into DOM
                    'css-loader', // css to commonjs
                    'sass-loader' //translates sass to css
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|gif|jpg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "images"
                    }
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })]
};