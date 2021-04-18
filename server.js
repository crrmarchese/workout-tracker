const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config();

// Import routes
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/FitnessTrackerDB", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});


// API routes always first, HTML last -> browser reads top to bottom
// Set the API file path
app.use('/api', apiRoutes);

// Set the home page to its file
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
