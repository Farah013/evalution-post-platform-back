const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Formations = sequelize.define(
    "Formations",
    {
      idFormation: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        // autoIncrement: true,
      },
      Titre: {
        type: Sequelize.STRING(50),
      },
      DateDeb: {
        type: DataTypes.DATE,
      },
      DateFin: {
        type: DataTypes.DATE,
      },
      Lieu: {
        type: Sequelize.STRING(50),
      },
      Mode: {
        type: Sequelize.STRING(50),
      },
      NbreParticipants: {
        type: DataTypes.INTEGER,
      },
      Formateur: {
        type: Sequelize.STRING(50),
      },
      NbreParticipants: {
        type: DataTypes.BOOLEAN,
      },
      Done: {
        type: DataTypes.INTEGER,
      },
      Eval: {
        type: DataTypes.INTEGER,
      },
    },
    {
      // This needs to be false to deactivate createdAt and updatedAt when sending the query
      timestamps: false,
    }
  );
  Formations.associate = function (models) {};

  return Formations;
};
