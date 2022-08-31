const express = require("express");
const router = express.Router();
const models = require("../Models/index");
const { QueryTypes, sequelize } = require("sequelize");
const { eventNames } = require("./api");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  searchByEmail,
} = require("../controllers/users.js");
//Getting all formations
router.get("/", getUsers);
//INSERTING NEW formation
router.post("/", createUser);
//UPDATING A formation
router.put("/:id", updateUser);

//DELETING A formation
router.delete("/:id", deleteUser);

//Get Participants by Email
router.get("/:Email", searchByEmail);

module.exports = router;
