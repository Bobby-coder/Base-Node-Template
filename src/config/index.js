const dotenv = require("dotenv");

// After calling config() method of dotenv object, all the .env variables are stored into the env object which is inside the global object "process" -> process.env.VARIABLE_NAME
dotenv.config();

// We will export all the env variables from this file and import wherever they are needed. For now we are exporting PORT variable.
module.exports = {
  PORT: process.env.PORT,
};