const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Prueba = sequelize.define('prueba', {
    id: {
         type: Seq.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
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
