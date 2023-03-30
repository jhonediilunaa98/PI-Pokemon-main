const { DataTypes } = require("sequelize");

const Type = (Sequelize) => {
    Sequelize.define("Type", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {timestamps: false});
};

module.exports = Type;
