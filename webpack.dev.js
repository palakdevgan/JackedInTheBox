const { EnvironmentPlugin } = require("webpack");

const devConfig = {
  mode: "development",
  plugins: [
    new EnvironmentPlugin({
      APITOKEN: "37f2a9a7cemsh5b611bc49e7a303p1e79e6jsn6b86cc035e5d",
    }),
  ],
};

module.exports = devConfig;
