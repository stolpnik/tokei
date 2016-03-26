var webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/main.ts',
    vendor: [
      'es6-shim',
      'rxjs',
    ]
  },
  output: {
    filename: 'main.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    new webpack.ProvidePlugin({
            // 'Promise': 'imports?this=>global!exports?global.Promise!es6-promise', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
        }),
  ]
}