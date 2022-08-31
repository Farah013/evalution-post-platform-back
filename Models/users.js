const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        // autoIncrement: true,
      },
      Name: {
        type: Sequelize.STRING(50),
      },
      Email: {
        type: Sequelize.STRING(50),
      },
      Password: {
        type: Sequelize.STRING(50),
      },
      Type: {
        type: Sequelize.STRING(50),
      },
    },
    {
      // This needs to be false to deactivate createdAt and updatedAt when sending the query
      timestamps: false,
    }
  );
  Users.associate = function (models) {};

  return Users;
};
