const models = require("../Models/index");
module.exports.getObjectif = async (req, res) => {
  let f;
  try {
    await models.Objectif.findAll().then((result) => {
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
module.exports.createObjectif = async (req, res) => {
  let objectifs;
  let f = req.body;
  try {
    await models.Objectif.create(f).then((result) => {
      try {
        objectifs = result;
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(objectifs);
};

module.exports.updateObjectif = async (req, res) => {
  let objectif;
  let { id } = req.params;
  let { contenu, niveau } = req.body;
  try {
    const objectif = await models.Objectif.update(
      {
        contenu: contenu,
        niveau: niveau,
      },
      { where: { idObjectif: id } }
    ).then((result) => {
      try {
        users = result;
        res.send(`Objective with the ID: ${id} has been updated successfully!`);
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(objectif);
};

module.exports.deleteObjectif = async (req, res) => {
  let objectif;
  let { id } = req.params;

  try {
    await models.Objectif.destroy({ where: { idObjectif: id } }).then(() => {
      try {
        res.send(`Objective with the ID: ${id} has been deleted successfully!`);
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(objectif);
};

module.exports.searchOById = async (req, res) => {
  let f;
  let O;
  let { id } = req.params;
  try {
    await models.Objectif.findAll({ where: { idFormation: id } }).then(
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
