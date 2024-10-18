const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Segment",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      files: {
        type: DataTypes.ARRAY(DataTypes.STRING), // Lista de archivos (URLs)
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );
};
