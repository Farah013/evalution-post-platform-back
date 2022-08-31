const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Evaluation = sequelize.define(
    "Evaluation",
    {
      idEval: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        // autoIncrement: true,
      },
      idFormation: {
        type: DataTypes.INTEGER,
      },
      autonomie: {
        type: DataTypes.INTEGER,
      },
      assimilation: {
        type: DataTypes.INTEGER,
      },
      organisation: {
        type: DataTypes.INTEGER,
      },
      dev_competences: {
        type: DataTypes.INTEGER,
      },
      comportement: {
        type: DataTypes.INTEGER,
      },
      participation: {
        type: DataTypes.INTEGER,
      },
      assertivity: {
        type: DataTypes.INTEGER,
      },

      points_forts: {
        type: Sequelize.STRING(50),
      },
      progression: {
        type: Sequelize.STRING(50),
      },
    },
    {
      // This needs to be false to deactivate createdAt and updatedAt when sending the query
      timestamps: false,
    }
  );
  Evaluation.associate = function (models) {};

  return Evaluation;
};
