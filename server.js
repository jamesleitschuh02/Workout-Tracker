const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workout";
const collections = ["workoutSeed"];

const db = mongojs(databaseUrl, collections);

require("./routes/html-routes.js")(app);

app.listen(3000, () => {
    console.log("App running on port 3000!");
  });