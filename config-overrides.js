const {
    override,
    useBabelRc,
} = require('customize-cra');
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

/* config-overrides.js */
/* eslint-disable react-hooks/rules-of-hooks */
module.exports = override(useBabelRc());