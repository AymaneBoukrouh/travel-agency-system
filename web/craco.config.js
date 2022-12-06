const cracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        baseUrl: ".",
        source: "tsconfig",
        tsConfigPath: "./tsconfig.paths.json",
      }
    }
  ]
};