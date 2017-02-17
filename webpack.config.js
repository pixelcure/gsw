const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const glob = require('glob');

//parts of webpack config
const parts = require('./webpack.parts');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
    dist: path.join(__dirname, 'dist')
};

const common = merge([
    {
        entry: {
            app: PATHS.app
        },
        output: {
            path: PATHS.build,
            filename: 'bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
        ]
    }
]);


module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            parts.clean(PATHS.build),
            parts.loadJavascript(PATHS.app),
            //if you want to have code splitting (from vendor files)
            //Add a new entry point here - React is used as an example
            //
            // parts.extractBundles([
            //     {
            //         name: 'vendor',
            //         entries: ['react']
            //     }
            // ]),
            parts.generateSourcemaps('source-map'),
            parts.lintJavaScript({ paths: PATHS.app }),
            parts.loadCSS(),
            parts.extractCSS(),
            // parts.purifyCSS(
            //     glob.sync(path.join(PATHS.app, '*'))
            // ),
            parts.compressImages(PATHS.app)
        ]);
    }

    return merge([
        common,
        {
        plugins: [
                new webpack.NamedModulesPlugin()
            ]
        },
        parts.generateSourcemaps('eval-source-map'),
        parts.compressImages(PATHS.app),
        parts.loadCSS(),
        parts.devServer({
            host: process.env.HOST,
            port: process.env.PORT
        }),
        parts.loadJavascript(PATHS.app),
        parts.lintJavaScript({
            paths: PATHS.app,
            options: {
                emitWarning: true
            }
        }),
        parts.lintCSS(PATHS.app)
    ]);
};
