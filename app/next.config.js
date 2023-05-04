require("dotenv").config

module.exports = {
  reactStrictMode: true,
  env: {
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
  },
};
