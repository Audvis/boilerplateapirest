const express = require('express');
const router = express.Router();
const {inicio} = require('../controllers/Prueba/inicio');

// post
router.post('/post',
   inicio
)
