const mongoose = require("mongoose");
const express = require("express");
const config = require("./utils/config");

const app = express();

mongoose
  .connect(config.MONGODB_URL, { family: 4 })
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.log("Error connection to MongoDB", e.message));

// app.use(express.static());
app.use(express.json());

module.exports = app;
