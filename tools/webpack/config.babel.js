import path from "path";
import webpack from "webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ManifestPlugin from "webpack-manifest-plugin";
import TerserJSPlugin from "terser-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import LoadablePlugin from "@loadable/webpack-plugin";

const isDev = process.env.NODE_ENV !== "production";

// Webpack configuration
module.exports = {
  mode: isDev ? "development" : "production",
  devtool: isDev ? "eval-source-map" : false,
  stats: "minimal",
  context: path.resolve(process.cwd()),
  entry: [
    isDev && "webpack-hot-middleware/client?reload=true",
    "./src/client"
  ].filter(Boolean),
  optimization: {
    minimizer: [new TerserJSPlugin()],
    splitChunks: {
      chunks: isDev ? "async" : "all"
    }
  },
  output: {
    path: path.resolve(process.cwd(), "public/assets"),
    publicPath: "/assets/",
    filename: isDev ? "[name].js" : "[name].[contenthash:8].js",
    chunkFilename: isDev ? "[id].js" : "[id].[contenthash:8].js",
    pathinfo: isDev
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { cacheDirectory: isDev }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        loader: "file-loader"
      },
      {
        test: /\.(gif|png|jpe?g|webp|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 10 * 1024, name: "[name].[contenthash:8].[ext]" }
          },
          {
            loader: "image-webpack-loader",
            options: { disable: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new ManifestPlugin({
      fileName: path.resolve(process.cwd(), "public/webpack-assets.json"),
      filter: (file) => file.isInitial
    }),
    new LoadablePlugin({
      writeToDisk: true,
      filename: "../loadable-stats.json"
    }),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEV__: isDev
    }),
    new webpack.ProgressPlugin(),
    isDev && new webpack.HotModuleReplacementPlugin(),
    isDev &&
      new ReactRefreshWebpackPlugin({ overlay: { sockIntegration: "whm" } }),
    !isDev && new webpack.HashedModuleIdsPlugin(),
    !isDev &&
      new CompressionPlugin({
        test: /\.(js|css|html)$/,
        threshold: 10240
      }),
    !isDev &&
      new BundleAnalyzerPlugin({
        analyzerMode: process.env.NODE_ENV === "analyze" ? "server" : "disabled"
      })
  ].filter(Boolean),
  resolve: {
    modules: ["src", "node_modules"],
    descriptionFiles: ["package.json"],
    extensions: [".js", ".jsx", ".json"]
  }
};
