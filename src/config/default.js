export default {
  HOST: process.env.NODE_HOST || "0.0.0.0", // Define your host from 'package.json'
  PORT: process.env.PORT || 8080,
  APP: {
    htmlAttributes: { lang: "pl" }
  }
};
