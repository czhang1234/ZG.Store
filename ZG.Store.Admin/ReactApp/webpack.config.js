const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

let config = {
    context: path.resolve(__dirname, './src'), //__dirname refers to the directory where this webpack.config.js lives
    entry: {
        app: ['./index.js'],

    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png', 'svg'],
        alias: {
            images: path.resolve(__dirname, 'src/assets/images') //images becomes the alias for src/assets/images
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            minChunks: 2
        }),
        new ExtractTextPlugin({ //call the constructor
            filename: 'styles/styles.css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] },
                }],
            },

            // Loaders for other file types can go here
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract({
                    loader: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader' //fallback for any css not extracted
                }),
                //loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.styl$/,
                include: path.join(__dirname, 'src'),
                loader: ExtractTextPlugin.extract({
                    loader: ['css-loader', 'stylus-loader'],
                    fallback: 'style-loader' //fallback for any css not extracted
                }),
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader', //use the babel-loader for all .jsx files
                exclude: /node_modules/ //exclude searching for files in the node_modules directory
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['file-loader?context=src/assets/images/&name=images/[path][name].[ext]', {
                    loader: 'image-webpack-loader',
                    query: {
                        mozjpeg: {
                            progressive: true,
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        optipng: {
                            optimizationLevel: 4,
                        },
                        pngquant: {
                            quality: '75-90',
                            speed: 3,
                        },
                    },
                }],
                exclude: /node_modules/,
                include: __dirname,
            },
            {
              test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'file-loader'
            },
            {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'), //a dir or url to serve HTML content from.
        historyApiFallback: true,
        inline: true,
        open: true //open default browser while launching
    },
    devtool: 'eval-source-map' //enable devtool for better debugging experience
}

module.exports = config;

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true, minimize: true }), //call the uglify plugin
        new OptimizeCSSAssets()
    );
}