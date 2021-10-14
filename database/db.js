const { Sequelize } = require('sequelize');
const { database } = require('../config');


//DB LOCAL
//Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize(
//     database.database,
//     database.username,
//     database.password, {
//         host: database.host,
//         dialect: 'postgres',
//         logging: false
//     },
// );

//DB DEPLOYADA
const sequelize = new Sequelize('postgres://ivcbfner:NKUHijq7XBop4_c6_lJ7sHBS7lBWS7gA@fanny.db.elephantsql.com/ivcbfner', {
    // Hace que no muestre todos los mensajes de conexion con SQL en la consola cuando inicias el servidor.
    logging: false
})
module.exports = sequelize;