const models = require("../Models/index");
module.exports.getEvaluation = async (req, res) => {
  let f;
  try {
    await models.Evaluation.findAll().then((result) => {
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
module.exports.createEvaluation = async (req, res) => {
  let evaluation;
  let f = req.body;
  try {
    await models.Evaluation.create(f).then((result) => {
      try {
        evaluation = result;
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(evaluation);
};

module.exports.updateEvaluation = async (req, res) => {
  let evaluation;
  let { id } = req.params;
  let {
    autonomie,
    assimilation,
    points_forts,
    organisation,
    dev_competences,
    comportement,
    participation,
    assertivity,
    progression,
  } = req.body;
  try {
    const evaluation = await models.Evaluation.update(
      {
        autonomie: autonomie,
        assimilation: assimilation,
        points_forts: points_forts,
        organisation: organisation,
        dev_competences: dev_competences,
        comportement: comportement,
        participation: participation,
        assertivity: assertivity,
        progression: progression,
      },
      { where: { idEval: id } }
    ).then((result) => {
      try {
        users = result;
        res.send(
          `Evaluation of the training with the ID: ${idFormation} has been updated successfully!`
        );
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(evaluation);
};

module.exports.deleteEvaluation = async (req, res) => {
  let evaluation;
  let { id } = req.params;

  try {
    await models.Evaluation.destroy({ where: { idEval: id } }).then(() => {
      try {
        res.send(
          `Evaluation of the training with the ID: ${idFormation} has been deleted successfully!`
        );
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(evaluation);
};

module.exports.searchById = async (req, res) => {
  let f;
  let O;
  let { id } = req.params;
  try {
    await models.Evaluation.findAll({ where: { idFormation: id } }).then(
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
