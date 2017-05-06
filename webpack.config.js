const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin       = require('clean-webpack-plugin');
const packageConfig     = require('./package.json');
const appEnv            = process.env.NODE_ENV || 'development';
const appPath           = path.join(__dirname, 'app');
const distPath          = path.join(__dirname, 'dist');
const exclude           = /node_modules/;

const config = {

  // The base directory for resolving `entry` (must be absolute path)
  context: appPath,

  entry: {
    app: packageConfig.main,
    vendor: Object.keys(packageConfig.dependencies)
  },

  output: {
    // The bundling output directory (must be absolute path)
    path: distPath,
    // Set proper base URL for serving resources
    publicPath: '/',
    // The output filename of the entry chunk, relative to `path`
    // [name] - Will be set per each key name in `entry`
    filename: 'bundle.[hash].js'
  },

  plugins: [

    // Generate index.html with included script tags
    new HtmlWebpackPlugin({
      inject: 'body',
      // favicon: 'assets/images/favicon.ico',
      template: 'index.html'
    }),

    // Do not output to dist if there are errors
    new webpack.NoEmitOnErrorsPlugin(),

    // Pass environment variable to frontend scripts
    new webpack.DefinePlugin({
      $_ENVIRONMENT: JSON.stringify(appEnv),
      // We must envify CommonJS builds:
      // https://github.com/reactjs/redux/issues/1029
      'process.env.NODE_ENV': JSON.stringify(appEnv)
    }),

    // Generate the bundle file.
    // The available options are:
	  //   name: string
    //   names: string[]
    //   filename: string
    //   minChunks: number
    //   chunks: string[]
    //   children: boolean
    //   async: boolean
    //   minSize: number
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js'
    })
  ],

  // Enable loading modules relatively (without the ../../ prefix). Personally,
  //  I prefer the relative directory prefix, as it denotes loading files from
  //  within the application vs dependencies (i.e., node_modules).
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.node'],
    modules: [appPath, 'node_modules']
  },

  module: {
    loaders: [

      // Transpile ES6 and enable Hot Reload
      {
        test: /\.js$/,
        loaders: [
          'babel-loader?cacheDirectory&plugins=babel-plugin-rewire'
        ],
        exclude: exclude
      },

      // CSS / SASS
      // Load styles with 'style-loader'.
      // Post process with 'autoprefixer' (auto prefix browser vendor specific
      //  styles).
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader!autoprefixer-loader?browsers=last 2 versions"
      }

    ],
    // https://github.com/niklasvh/html2canvas/issues/749
    noParse: [/html2canvas/]
  },

  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'express': 'express'
  },

  // Settings for webpack-dev-server
  devServer: {
    contentBase: appPath,
    hot: true, // Hot module loading
    noInfo: true,
    inline: true,
    historyApiFallback: true
  }
};

if (appEnv === 'development') {
  config.devtool = '#inline-source-map';
}

if (appEnv === 'production') {
  config.plugins.push(
    // Remove build related folders
    new CleanPlugin(['dist'])
  );
}

module.exports = config;
