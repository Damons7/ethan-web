const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')
const CracoLessPlugin = require('craco-less')
let buildTime = (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString()
buildTime = '"' + buildTime + '"'

module.exports = {
    webpack: {
        alias: {
            "@": path.join(__dirname, ".", "src"),
            "@components": path.join(__dirname, ".", "src/components"),
            "@common": path.join(__dirname, ".", "src/common"),
            "@api": path.join(__dirname, ".", "src/api"),
            "@images": path.join(__dirname, ".", "src/assets/images"),
        },

        plugins: {
            
            add: [
                new CopyWebpackPlugin({
                    patterns: [{
                        from: 'public/static',
                        to: 'res',
                        noErrorOnMissing: true
                    }],
                }),
                new webpack.DefinePlugin({ // 全局变量
                    'process.env': {
                        'buildTime': buildTime,
                    }
                }),
            ], /* An array of plugins */
            remove: [],  /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */
        },
    },
    babel: {
        plugins: [
            ['import',
                { libraryName: 'antd', libraryDirectory: 'es', style: 'css' },
            ],
            ['@babel/plugin-proposal-decorators', { legacy: true }]
            
        ]
    },
    devServer: {
        port: 3030,
        compress: true,
        // proxy: {
        //     '/ethan': {
        //         target: `http://10.100.0.114:8199`,
        //         secure: true,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/ethan': ''
        //         }
        //     }
        // }

    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
              lessLoaderOptions: {
                lessOptions: {
                  modifyVars: {},
                  javascriptEnabled: true
                }
              }
            }
          }
    ],
};
