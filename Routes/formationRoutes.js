const express = require("express");
const router = express.Router();
const models = require("../Models/index");
const { QueryTypes, sequelize } = require("sequelize");
const { eventNames } = require("./api");
const {
  getFormation,
  createFormation,
  updateFormation,
  deleteFormation,
  searchById,
  searchByTitle,
} = require("../controllers/formation.js");
//Getting all formations
router.get("/", getFormation);
//INSERTING NEW formation
router.post("/", createFormation);
//UPDATING A formation
router.put("/:id", updateFormation);
//DELETING A formation
router.delete("/:id", deleteFormation);

//Searching Formation by Title
router.get("/title/:title", searchByTitle);
//SEARCHING BY ID
router.get("/:id", searchById);
module.exports = router;
