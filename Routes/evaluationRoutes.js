const express = require("express");
const router = express.Router();
const models = require("../Models/index");
const { QueryTypes, sequelize } = require("sequelize");
const { eventNames } = require("./api");
const {
  getEvaluation,
  createEvaluation,
  updateEvaluation,
  deleteEvaluation,
  searchById,
} = require("../controllers/evaluation.js");
//Getting all formations
router.get("/", getEvaluation);
//INSERTING NEW formation
router.post("/", createEvaluation);
//UPDATING A formation
router.put("/:id", updateEvaluation);
//DELETING A formation
router.delete("/:id", deleteEvaluation);

//SEARCHING BY ID
router.get("/:id", searchById);
module.exports = router;
