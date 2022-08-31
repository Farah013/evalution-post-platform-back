var express = require("express");
var app = express();
var formateurRoutes = require("./formateurRoutes");
var formationRoutes = require("./formationRoutes");
var objectifRoutes = require("./objectifRoutes");
var participantRoutes = require("./participantRoutes");
var evaluationRoutes = require("./evaluationRoutes");
var userRoutes = require("./userRoutes");

// -----------------
// Using all Routes

// -----------------
app.use("/formateurs/", formateurRoutes);
//app.use("/nouvelleRoute/", nouvelleRoutes);

// Add other routes here ..
app.use("/formations/", formationRoutes);
// ---------------------
app.use("/objectifs/", objectifRoutes);
// ---------------------
app.use("/participants/", participantRoutes);
// ---------------------
app.use("/evaluation/", evaluationRoutes);
// ---------------------
app.use("/users/", userRoutes);
// Exporting all routes
// ---------------------
module.exports = app;
