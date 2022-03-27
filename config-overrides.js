const { override, addWebpackPlugin } = require('customize-cra')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const path = require('path')

module.exports = override(
    config => {
        config.resolve.alias = {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@includes': path.resolve(__dirname, 'src/includes'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@css': path.resolve(__dirname, 'src/css'),
            '@i18n': path.resolve(__dirname, 'src/i18n'),
        };
        return config
    },
    /* addWebpackPlugin(
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
        })
    ), */
    addWebpackPlugin(
        new HtmlWebpackExternalsPlugin({
            enabled: true,
            externals: [
                {
                    module: 'react',
                    entry: 'https://cdn.timeletters.cn/react/react/17.0.2/react.production.min.js',
                    global: 'React',
                },
                {
                    module: 'react-dom',
                    entry: 'https://cdn.timeletters.cn/react/react-dom/17.0.2/react-dom.production.min.js',
                    global: 'ReactDOM',
                },
            ],
        })
    )
)
