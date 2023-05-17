require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const registerRoute = require("./routes/registerRoute");
const indexRoute = require("./routes/indexRoute");
const loginRoute = require("./routes/loginRoute");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const connectionUrl = `mongodb+srv://${process.env.USER_NAME}:${process.env.CONNECTION_PASSWORD}${process.env.PROJECT_URL}retryWrites=true&w=majority`;

app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/", indexRoute);

mongoose.connect(connectionUrl).then(() => {
  console.log("Connected to mongodb");
  app.listen(port, () => console.log("Server running on port : ", port));
});
