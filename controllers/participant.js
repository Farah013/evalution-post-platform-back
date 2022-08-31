const models = require("../Models/index");
module.exports.getParticipant = async (req, res) => {
  let f;
  try {
    await models.Participants.findAll().then((result) => {
      try {
        f = result;
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(f);
};
module.exports.createParticipant = async (req, res) => {
  let participants;
  let f = req.body;
  try {
    await models.Participants.create(f).then((result) => {
      try {
        participants = result;
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(participants);
};

module.exports.updateParticipant = async (req, res) => {
  let p;
  let { id } = req.params;
  let { participant, identifiant, email } = req.body;
  try {
    const part = await models.Participants.update(
      {
        participant: participant,
        identifiant: identifiant,
        email: email,
      },
      { where: { idParticipant: id } }
    ).then((result) => {
      try {
        users = result;
        res.send(
          `Participant with the ID: ${id} has been updated successfully!`
        );
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(participant);
};

module.exports.deleteParticipant = async (req, res) => {
  let participant;
  let { id } = req.params;

  try {
    await models.Participants.destroy({ where: { idParticipant: id } }).then(
      () => {
        try {
          res.send(
            `Participant with the ID: ${id} has been deleted successfully!`
          );
        } catch (error) {
          console.log("Erreur", error); // true
        }
      }
    );
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(participant);
};

module.exports.searchPById = async (req, res) => {
  let f;
  let P;
  let { id } = req.params;
  try {
    await models.Participants.findAll({ where: { idFormation: id } }).then(
      (result) => {
        try {
          f = result;
        } catch (error) {
          console.log("Erreur", error); // true
        }
      }
    );
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(f);
};
