module.exports = (env) => {
    const webpack = require("webpack");
    const paths = require('./configs/paths');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

//common plugins
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.template
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify("production")
            }
        })
    ];

    const config = {
        entry: [
            paths.indexJsPath
        ],
        output: {
            path: paths.prodPath,
            filename: "js/main.js",
            publicPath: paths.publicPath,
            sourceMapFilename: 'js/main.js.map'
        },
        devtool: 'nosources-source-map',
        stats: {
            modules: false,
            chunks: false,
            children: false,
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    enforce: 'pre',
                    use: [
                        {
                            options: {
                                baseConfig: '.eslintrc.js'
                            },
                            loader: require.resolve('eslint-loader'),
                        },
                    ],
                    include: paths.srcPath,
                    exclude: paths.nodePath,
                },
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    include: paths.srcPath,
                    exclude: paths.nodePath,
                },
                {
                    test: /\.\w{3,5}$/,
                    exclude: [/\.jsx?$/, /\.html$/, /\.json$/],
                    loader: require.resolve('file-loader'),
                    options: {
                        name: 'media/[name].[hash:8].[ext]',
                    },
                },
            ]
        },
        plugins,
    };

    // dev-config
    if(!env){
        config.entry.splice(0, 0, 'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true');
        config.devtool = 'cheap-module-eval-source-map';
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return config;
};

