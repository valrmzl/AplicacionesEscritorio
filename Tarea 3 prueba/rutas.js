
const path= require('path');
const express = require('express');


function cargarTarea(req,res){
    console.log('api TAREA works');
    const ruta=path.join(__dirname+'/views/tarea3.html')
    //res.send('api works for: '+ req.nombre);
    res.sendFile(ruta);

}

function cargarHome(req,res){
    console.log('api home');
    const ruta=path.join(__dirname+'/views/home.html')
    //res.send('api works for: '+ req.nombre);
    res.sendFile(ruta);

}

function cargarPagina2(req,res){
    console.log('api works');
    const ruta=path.join(__dirname+'/views/pagina2.html')
    //res.send('api works for: '+ req.nombre);
    res.sendFile(ruta);

}
function cargarPagina3(req,res){
    console.log('api works');
    const ruta=path.join(__dirname+'/views/pagina3.html')
    //res.send('api works for: '+ req.nombre);
    res.sendFile(ruta);

}


module.exports = function(app){
    //app.use('/assets', express.static(path.join(__dirname,'assets')));
    app.get('/home', cargarHome);
    app.get('/', cargarTarea);
    app.get('/pagina2', cargarPagina2);
    app.get('/pagina3', cargarPagina3);

  
   
}