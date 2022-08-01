const express = require("express");
const router = express.Router();
const models = require("../Models/index");
const { QueryTypes, sequelize } = require("sequelize");
const { eventNames } = require("./api");
const {
  getFormateurs,
  createFormateur,
  updateFormateur,
  deleteFormateur,
} = require("../controllers/formateur.js");
//Getting all trainers
router.get("/", getFormateurs);
//INSERTING NEW TRAINER
router.post("/", createFormateur);
//UPDATING A TRAINER
router.put("/:id", updateFormateur);

//DELETING A USER
router.delete("/:id", deleteFormateur);

module.exports = router;
