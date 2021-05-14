//create Mongo database with a Mongoose schema and handle routes with Express
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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });