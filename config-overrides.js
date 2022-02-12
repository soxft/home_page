const {
    override,
    //fixBabelImports,
    //addWebpackExternals,
    //addWebpackPlugin
} = require('customize-cra');
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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