const webpack = require('webpack');

exports.modifyWebpackConfig = ({ config }) =>
    config.plugin(`jQuery`, webpack.ProvidePlugin, [
        {
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        },
    ])
