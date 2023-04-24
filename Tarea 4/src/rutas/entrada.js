const express= require('express');
const router=express.Router();
const controller = require('../controladores/buscadorController');
router.get('', controller.listar);
module.exports= router;