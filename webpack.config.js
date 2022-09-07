const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(tsx|ts)?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/public/index.html')
        })
    ],
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    }
}