const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Prueba = sequelize.define('prueba', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        timestamps: false
    }
)

module.exports = Prueba;
