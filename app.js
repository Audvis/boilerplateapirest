const express = require('express');
const cors = require('cors')
const app = express();
const sequelize = require('./database/db');
require('./database/relations');

//setting
const port = process.env.PORT || 3001

//Middleware express para llenar el body
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors())


//Prueba Routes
app.use('/prueba', require('./routes/Prueba'));


app.listen(port, '0.0.0.0', () => {
  console.log(`Listening at port:${port}`);

  //conectar base de datos
  sequelize.sync({ force: false }).then(async () => {
    console.log('Conection to the DB Success');
  }).catch(error => {
    console.log('An error has been found: ', error)
  })
})
