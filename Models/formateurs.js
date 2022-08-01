const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Formateurs = sequelize.define(
    "Formateurs",
    {
      CIN: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        // autoIncrement: true,
      },
      FirstName: {
        type: Sequelize.STRING(50),
      },
      LastName: {
        type: Sequelize.STRING(50),
      },
      Email: {
        type: Sequelize.STRING(50),
      },
      Password: {
        type: Sequelize.STRING(50),
      },
    },
    {
      // This needs to be false to deactivate createdAt and updatedAt when sending the query
      timestamps: false,
    }
  );
  Formateurs.associate = function (models) {};

  return Formateurs;
};
