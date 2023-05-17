const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json(`Welcome to NERD TALKS!`);
});

module.exports = app;
