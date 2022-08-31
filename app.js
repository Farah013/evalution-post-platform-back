const express = require("express");
const app = express();
const fs = require("fs");
var bodyParser = require("body-parser");
const apiRouter = require("./Routes/api");
const HttpError = require("./Util/http-error");
const logger = require("./Util/logger");

try {
  logger.createFile();
} catch (error) {
  console.log("erreur lors de la création du fichier log ", error);
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// parse application/json
app.use(bodyParser.json());

// ---------------------------
// Getting Environment Data
// ---------------------------
let PORT = process.env.PORT;

// Starting Server at specified port
app.listen(PORT, function () {
  console.log("Server running on port", PORT);
});

// console.log("\nFile Contents of file before append:",
//   fs.readFileSync("example_file.txt", "utf8"));

// fs.appendFileSync("example_file.txt", " - Geeks For Geeks");

// // Get the file contents after the append operation
// console.log("\nFile Contents of file after append:",
//        fs.readFileSync("example_file.txt", "utf8"));
// Main Route
app.use("/", apiRouter);

// Router Expection Handling
app.use((req, res, next) => {
  const error = new HttpError();
  res.status(404).send("Route introuvable!");
  //throw error;
});
