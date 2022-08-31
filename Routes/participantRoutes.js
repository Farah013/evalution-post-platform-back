const express = require("express");
const router = express.Router();
const models = require("../Models/index");
const { QueryTypes, sequelize } = require("sequelize");
const { eventNames } = require("./api");
const {
  getParticipant,
  createParticipant,
  updateParticipant,
  deleteParticipant,
  searchPById,
} = require("../controllers/participant.js");
//Getting all formations
router.get("/", getParticipant);
//INSERTING NEW formation
router.post("/", createParticipant);
//UPDATING A formation
router.put("/:id", updateParticipant);

//DELETING A formation
router.delete("/:id", deleteParticipant);

//Get Participants by IdFormation
router.get("/:id", searchPById);

module.exports = router;
