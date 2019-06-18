const withTypescript = require('@zeit/next-typescript');
const webpack = require('webpack');
const StatsPlugin = require('stats-webpack-plugin');// 
const path = require('path');
const TimingCompilationPlugin = require('./TimingCompilationPlugin');
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

const baseConfig = {
   maxAssetSize: 1048576
}

// variables
const srcDir = 'src';
const buildDir = 'build';
// const isProduction = process.argv.mode === 'production' || process.env.NODE_ENV === 'production';
const sourcePath = path.join(__dirname, `./${srcDir}`);
console.log(sourcePath);
const outPath = path.join(__dirname, `./${buildDir}`);

module.exports = withTypescript({
   webpack: (config, options) => {
      config.resolve.plugins = [
         ...config.resolve.plugins || [],
         new TsConfigPathsPlugin(),
      ];
      return Object.assign(config, {
         plugins: config.plugins.concat(
            new TimingCompilationPlugin(),
         ),
         performance: {
            hints: "warning", // enum
            maxAssetSize: baseConfig.maxAssetSize, // int (in bytes),
            maxEntrypointSize: baseConfig.maxAssetSize, // int (in bytes)
            assetFilter: function (assetFilename) {
               // Function predicate that provides asset filenames
               return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
            }
         },
      });
   },
});
