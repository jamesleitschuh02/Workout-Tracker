const express = require("express");
// const mongojs = require("mongojs");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// const databaseUrl = "workout";
// const collections = ["workouts"];

// const db = mongojs(databaseUrl, collections);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{ useNewUrlParser: true,
  useUnifiedTopology: true 
}
);

require("./routes/html-routes.js")(app);
require("./routes/db-routes")(app);

app.listen(3000, () => {
    console.log("App running on port 3000!");
  });