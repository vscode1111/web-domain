const withTypescript = require('@zeit/next-typescript');
const webpack = require('webpack');
const StatsPlugin = require('stats-webpack-plugin');

const baseConfig = {
    maxAssetSize: 3 * 1048576
}

module.exports = withTypescript({
    webpack: (config, options) => {
        console.log(baseConfig);
        return Object.assign(config, {
            plugins: config.plugins.concat(
                new StatsPlugin('stats.json', {
                    timings: true,
                    assets: true,
                    chunks: true,
                    chunkModules: true,
                    modules: true,
                    children: true,
                    cached: true,
                    reasons: true
                })),
            performance: {
                hints: "warning", // enum
                maxAssetSize: baseConfig.maxAssetSize, // int (in bytes),
                maxEntrypointSize: baseConfig.maxAssetSize, // int (in bytes)
                assetFilter: function (assetFilename) {
                    // Function predicate that provides asset filenames
                    return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
                }
            },
            resolve: Object.assign(config.resolve, {
                alias: Object.assign(
                    config.resolve.alias,
                    config.isServer ? {} : { fetch: 'node-fetch' }
                ),
            }),
            stats: {
                // copied from `'minimal'`
                all: true,
                modules: true,
                maxModules: 0,
                errors: true,
                warnings: true,
                // our additional options
                moduleTrace: true,
                errorDetails: true
            },
        });
    },
});
