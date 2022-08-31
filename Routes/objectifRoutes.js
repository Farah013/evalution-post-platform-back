const express = require("express");
const router = express.Router();
const models = require("../Models/index");
const { QueryTypes, sequelize } = require("sequelize");
const { eventNames } = require("./api");
const {
  getObjectif,
  createObjectif,
  updateObjectif,
  deleteObjectif,
  searchOById,
} = require("../controllers/objectif.js");
//Getting all formations
router.get("/", getObjectif);
//INSERTING NEW formation
router.post("/", createObjectif);
//UPDATING A formation
router.put("/:id", updateObjectif);

//DELETING A formation
router.delete("/:id", deleteObjectif);

//Search Objectif by IdFormation
router.get("/:id", searchOById);

module.exports = router;
