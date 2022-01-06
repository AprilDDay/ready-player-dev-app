const { merge } =require('webpack-merge')
const HtmmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8081', //for testing
    },
    devServer: {
        port: 8081, 
        historyApiFallback: {
            index:'/index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'helloPlayer',
            filename: 'remoteEntry.js',
            exposes: {
                './micro-frontend-app': './src/bootstrap'
            },
            shared: packageJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};

module.exports = merge(commonConfig, devConfig)

//https://medium.com/geekculture/how-to-create-a-micro-frontend-application-using-react-ef88c38b2fe6