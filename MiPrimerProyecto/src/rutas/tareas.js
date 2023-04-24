//const router = require('express').Router()

const express= require('express');
const router=express.Router();
const controller = require('../controladores/tareasContro');

router.get('', controller.listar);

/*
//aqui van las rutas
router.post('',express.json(),function(req,res){
    console.log(req.body);
    res.send('tarea creada');

})

router.put('/:id', function(req,res){
    res.send('tarea actualizada correctamente');
})


router.get('', function(req,res){
    //res.send('lista de TODAS las tareas');
    const tareas =[
        {titulo: 'Tarea 1', status : 'nueva'},
        {titulo: 'Tarea 2', status : 'nueva'},
        {titulo: 'Tarea 3', status : 'en progreso'},
        {titulo: 'Tarea 4', status : 'en progreso'},
        {titulo: 'Tarea 5', status : 'termianda'}
    ]
    res.render('tareas',{
        tareas
    });
})

router.get('/:id', function(req,res){
    const id= req.params.id;
    res.send('mostrando tarea ', id);
})
*///aqui van las rutas

//antes de definir las rutas hay que exportar el middleware
module.exports= router;
