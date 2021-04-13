// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

const path = require('path');
const router = require("express").Router();

// ROUTING
  // Set the root to the index.html page
  router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Set the /exercise path to exercise.html
  router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // Set the /stats path to stats.html
  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });


  // If no matching route is found default to home
 router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
  module.exports = router;