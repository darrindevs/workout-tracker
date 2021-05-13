//todocreate Mongo database with a Mongoose schema and handle routes with Express
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//set up our environmental port and local port 
const PORT = process.env.PORT || 3000;

// set up express 
const app = express();

//set up logger with morgan
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// set up Mongoose 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouttracker", { useNewUrlParser: true });

//todo create the models 
const db = require("./models");

//todo create the routes 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });