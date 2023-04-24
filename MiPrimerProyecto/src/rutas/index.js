const express= require('express');
const router=express.Router();


const rutasTareas= require('./tareas');
const rutasUsuarios=require('./usuarios');
const {auth}=require('./../middlewares');
//con use va a usar un middleware
//las comillas es la raiz


//para que use la autenticacion en cada una
router.use('',auth);
router.use('/tareas', rutasTareas);
router.use('/usuarios', rutasUsuarios);


module.exports= router;