const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hp: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 400 },
    },
    attack: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 350 },
    },
    defense: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 400 },
    },
    speed: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 100 },
    },
    height: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 150 }
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 300 }
    },
    imgUrl: {
      type: DataTypes.TEXT,
      isUrl: true
    },
    custom: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  {timestamps: false} );
};
