const express = require("express");

// If we are importing from an index.js file, then we dont need to specifically mention /index at the path end. e.g, './config/index.js'
// Here we are destructuring an object, we are extracting PORT property from the imported object using destructuring.
const { ServerConfig, Logger } = require("./config");

const apiRoutes = require("./routes");

const app = express();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
  Logger.info("Successfully started the server", "root", {});
});
