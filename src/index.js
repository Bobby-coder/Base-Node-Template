const express = require("express");

// If we are importing from an index.js file, then we dont need to specifically mention /index at the path end. e.g, './config/index.js'
// Here we are destructuring an object, we are extracting PORT property from the imported object using destructuring.
const { PORT } = require("./config");

const app = express();

app.listen(PORT, () =>
  console.log(`Successfully started the server on PORT : ${PORT}`)
);

