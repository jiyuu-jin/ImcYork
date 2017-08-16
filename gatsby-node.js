var webpack = require('webpack');

exports.modifyWebpackConfig = function(config, stage) {
    if (!config.plugins) config.plugins = [];
    config.plugins.push(
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            "window.jquery": "jquery",
        }));
    // edit loaders here
    return config
}