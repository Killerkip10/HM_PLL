const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './index.tsx',
    output: {
        path: path.join(__dirname, 'build'),
        filename: isDev ? '[name].js' : '[name]-[chunkhash].js',
    },
    mode: isDev ? 'development' : 'production',
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'src'),
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devtool: isDev ? 'inline-source-map' : false,
    devServer: {
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: 'index.html' }),
        new ForkTsCheckerWebpackPlugin(),
    ]
};