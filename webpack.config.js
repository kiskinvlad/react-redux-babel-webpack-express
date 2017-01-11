var webpack = require('webpack');
var HappyPack = require('happypack');

var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.resolve(ROOT_PATH, 'app/src/index'),
    ],
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                include: path.resolve(ROOT_PATH, 'app/src')
            }
        ],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: [ 'happypack/loader?id=jsx' ],
            include: path.resolve(ROOT_PATH, 'app/src')
        },
            {
                test: /\.css$/,
                loader:'style!css!',
                include: [
                    path.resolve(ROOT_PATH, 'app/styles'),
                    path.resolve(ROOT_PATH, 'app/src'),
                    path.resolve(ROOT_PATH, 'app/src'),
                    path.resolve(ROOT_PATH, 'node_modules/font-awesome'),
                    path.resolve(ROOT_PATH, 'node_modules/bootstrap')
                ],
            },
            {
                test: /\.scss$/,
                loaders: [ 'happypack/loader?id=sass' ],
                include: [
                    path.resolve(ROOT_PATH, 'app/styles'),
                    path.resolve(ROOT_PATH, 'app/src')
                ],
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000",
            },
            {
                test: /\.jpg$/,
                loader: "file-loader",
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream',
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file',
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml',
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.resolve(ROOT_PATH, 'app/build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(ROOT_PATH, 'app/ build '),
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    plugins: [
        new HappyPack({
            id: 'sass',
            threads: 2,
            loaders: [ 'style','css','sass' ],
            // customize as needed, see Configuration below
        }),
        new HappyPack({
            id: 'jsx',
            threads: 4,
            loaders: [ 'react-hot', 'babel?presets[]=es2015,presets[]=stage-2,presets[]=react' ]
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'Listlogs'
        })
    ]
};