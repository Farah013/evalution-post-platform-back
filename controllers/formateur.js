const models = require("../Models/index");
module.exports.getFormateurs = async (req, res) => {
  let formateurs;
  try {
    await models.Formateurs.findAll().then((result) => {
      try {
        formateurs = result;
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(formateurs);
};
module.exports.createFormateur = async (req, res) => {
  let formateurs;
  let formateur = req.body;
  try {
    await models.Formateurs.create(formateur).then((result) => {
      try {
        formateurs = result;
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(formateurs);
};

module.exports.updateFormateur = async (req, res) => {
  let formateurs;
  let { id } = req.params;
  let { Name, Speciality, Email, Password } = req.body;
  try {
    const user = await models.Formateurs.update(
      {
        Name: Name,
        Speciality: Speciality,
        Email: Email,
        Password: Password,
      },
      { where: { CIN: id } }
    ).then((result) => {
      try {
        users = result;
        res.send(`Trainer with the CIN: ${id} has been updated successfully!`);
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(formateurs);
};

module.exports.deleteFormateur = async (req, res) => {
  let formateurs;
  let { id } = req.params;

  try {
    await models.Formateurs.destroy({ where: { CIN: id } }).then(() => {
      try {
        res.send(`Trainer with the CIN: ${id} has been deleted successfully!`);
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(formateurs);
};
