const { DataTypes } = require("sequelize");

const Type = (Sequelize) => {
    Sequelize.define("Type", {
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
    });
};

module.exports = Type;
