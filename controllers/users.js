const models = require("../Models/index");
module.exports.getUsers = async (req, res) => {
  let f;
  try {
    await models.Users.findAll().then((result) => {
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
module.exports.createUser = async (req, res) => {
  let users;
  let f = req.body;
  try {
    await models.Users.create(f).then((result) => {
      try {
        users = result;
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(users);
};

module.exports.updateUser = async (req, res) => {
  let users;
  let { id } = req.params;
  let { Name, Email, Password } = req.body;
  try {
    const users = await models.Users.update(
      {
        Name: Name,
        Email: Email,
        Password: Password,
      },
      { where: { id: id } }
    ).then((result) => {
      try {
        users = result;
        res.send(`The user with the ID: ${id} has been updated successfully!`);
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(users);
};

module.exports.deleteUser = async (req, res) => {
  let users;
  let { id } = req.params;

  try {
    await models.Users.destroy({ where: { id: id } }).then(() => {
      try {
        res.send(`The user with the ID: ${id} has been deleted successfully!`);
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(users);
};

module.exports.searchByEmail = async (req, res) => {
  let f;
  let O;
  let { Email } = req.params;
  try {
    await models.Users.findAll({ where: { Email: Email } }).then((result) => {
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
