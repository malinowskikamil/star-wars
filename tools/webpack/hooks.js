/* Require hooks for server-side */

module.exports = () => {
  // Images
  require("asset-require-hook")({
    // Must use the same option with webpack's configuration
    extensions: ["gif", "jpg", "jpeg", "png", "webp", "svg"],
    publicPath: "/assets/",
    limit: 10 * 1024,
    name: "[name].[contenthash:8].[ext]"
  });

  // Fonts
  require("asset-require-hook")({
    // Must use the same option with webpack's configuration
    extensions: ["woff", "woff2", "ttf", "otf", "eot"],
    publicPath: "/assets/"
  });
};
