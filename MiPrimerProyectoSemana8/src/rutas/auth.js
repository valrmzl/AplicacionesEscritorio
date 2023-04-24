const express= require('express');
const router=express.Router();
const controller = require('../controladores/usuarios');

router.post('/login', controller.login);
router.post('/registro', controller.registro);
module.export=router;
