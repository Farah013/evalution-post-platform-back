const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const Objectif = sequelize.define(
    "Objectif",
    {
      idObjectif: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        // autoIncrement: true,
      },

      contenu: {
        type: Sequelize.STRING(50),
      },
      niveau: {
        type: DataTypes.INTEGER,
      },
    },
    {
      // This needs to be false to deactivate createdAt and updatedAt when sending the query
      timestamps: false,
    }
  );
  Objectif.associate = function (models) {
    models.Formations.hasMany(models.Objectif, {
      foreignKey: {
        name: "idFormation",
      },
    });
    // models.Objectif.belongsTo(models.Formations);
  };

  return Objectif;
};
