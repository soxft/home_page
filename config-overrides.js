import {
    override,
    // addWebpackPlugin
} from 'customize-cra';
//impoty { BundleAnalyzerPlugin } = from 'webpack-bundle-analyzer'

module.exports = override(
    /*
        addWebpackPlugin(
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
            })
        ),
        (config) => {
            config.output.publicPath = "https://cdn.timeletters.cn/home_page/"
            return config;
    }
    */
);