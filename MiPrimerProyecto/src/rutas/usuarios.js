//const router = require('express').Router()

const express= require('express');
const router=express.Router();


//aqui van las rutas
router.post('',function(req,res){
    res.send(' creado');

})

router.put('/:id', function(req,res){
    res.send('usuario actualizada correctamente');


})

router.get('', function(req,res){
    res.send('lista de TODAS las usuarios');
})

router.get('/:id', function(req,res){
    const id= req.params.id;
    res.send('mostrando usuarios ', id);
})

//antes de definir las rutas hay que exportar el middleware
module.exports= router;
