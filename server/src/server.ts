require("dotenv").config();

import express from "express";
import mongoose from "mongoose";

const Config = require("./configs/config");


const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();

app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);
app.use(bodyParser.json());

require("./api/routes")(app);

// Connect to MongoDB server
mongoose
  .connect(Config.databaseURI)
  .then((result) => {
    app.listen(3001, () => {
      console.log("Beep boop! 🔥 Server is running 🔥");
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB");
  });

