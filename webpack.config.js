const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use: [
                    'style-loader', //inject into DOM
                    'css-loader', // css to commonjs
                    'sass-loader' //translates sass to css
                ]
            }
        ]
    },
    plugins:[new HtmlWebpackPlugin({
        template: "./src/template.html"
    })]
};