const models = require("../Models/index");
module.exports.getFormation = async (req, res) => {
  let f;
  try {
    await models.Formations.findAll().then((result) => {
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
module.exports.createFormation = async (req, res) => {
  let formations;
  let f = req.body;
  try {
    await models.Formations.create(f).then((result) => {
      try {
        formations = result;
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(formations);
};

module.exports.updateFormation = async (req, res) => {
  let formations;
  let { id } = req.params;
  let {
    Titre,
    DateDeb,
    DateFin,
    Lieu,
    Mode,
    NbreParticipants,
    Formateur,
    Done,
    Eval,
  } = req.body;
  try {
    const formation = await models.Formations.update(
      {
        Titre: Titre,
        DateDeb: DateDeb,
        DateFin: DateFin,
        Lieu: Lieu,
        Mode: Mode,
        NbreParticipants: NbreParticipants,
        Formateur: Formateur,
        Done: Done,
        Eval: Eval,
      },
      { where: { idFormation: id } }
    ).then((result) => {
      try {
        users = result;
        res.send(`Training with the ID: ${id} has been updated successfully!`);
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(formations);
};

module.exports.deleteFormation = async (req, res) => {
  let formations;
  let { id } = req.params;

  try {
    await models.Formations.destroy({ where: { idFormation: id } }).then(() => {
      try {
        res.send(`Training with the ID: ${id} has been deleted successfully!`);
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(formations);
};

module.exports.searchById = async (req, res) => {
  let f;
  let O;
  let { id } = req.params;
  try {
    await models.Formations.findAll({ where: { idFormation: id } }).then(
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

module.exports.searchByTitle = async (req, res) => {
  let f;
  let O;
  let { title } = req.params;
  try {
    await models.Formations.findAll({ where: { Titre: title } }).then(
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
