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
} = require("../controllers/formation.js");
//Getting all formations
router.get("/", getFormation);
//INSERTING NEW formation
router.post("/", createFormation);
//UPDATING A formation
router.put("/:id", updateFormation);

//DELETING A formation
router.delete("/:id", deleteFormation);

module.exports = router;
