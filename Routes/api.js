var express = require("express");
var app = express();
var formateurRoutes = require("./formateurRoutes");
var formationRoutes = require("./formationRoutes");
// -----------------
// Using all Routes

// -----------------
app.use("/formateurs/", formateurRoutes);
//app.use("/nouvelleRoute/", nouvelleRoutes);

// Add other routes here ..
app.use("/formations/", formationRoutes);
// ---------------------
// Exporting all routes
// ---------------------
module.exports = app;
