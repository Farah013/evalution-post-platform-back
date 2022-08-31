const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const Participants = sequelize.define(
    "Participants",
    {
      idParticipant: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        // autoIncrement: true,
      },
      participant: {
        type: Sequelize.STRING(50),
      },
      identifiant: {
        type: Sequelize.STRING(50),
      },
      email: {
        type: Sequelize.STRING(50),
      },
    },
    {
      // This needs to be false to deactivate createdAt and updatedAt when sending the query
      timestamps: false,
    }
  );
  Participants.associate = function (models) {
    models.Formations.hasMany(models.Participants, {
      foreignKey: {
        name: "idFormation",
      },
    });
    //models.Participants.belongsTo(models.Formations);
  };

  return Participants;
};
