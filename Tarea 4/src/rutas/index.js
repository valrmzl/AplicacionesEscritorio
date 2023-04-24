const express= require('express');
const router=express.Router();

const rutaEntrada= require('./entrada');
const rutaBuscador=require('./buscador');


router.use('/news1', rutaEntrada);
router.use('/news', rutaBuscador);


module.exports= router;