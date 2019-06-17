const withTypescript = require('@zeit/next-typescript');
const webpack = require('webpack');
const StatsPlugin = require('stats-webpack-plugin');// 
const path = require('path');
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const smp = new SpeedMeasurePlugin();
const TimingCompilationPlugin = require('./TimingCompilationPlugin');


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

// module.exports = smp.wrap({
module.exports = withTypescript({
   webpack: (config, options) => {
      console.log(baseConfig);
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

// module.exports = {
//    webpack(config, options) {
//      return Object.assign(config, {
//        resolve: {
//          alias: {
//            components: path.join(__dirname, 'components'),
//          }
//        },
//      }) 
//    }
//  }
 
