
const path= require('path');
const express = require('express');
const auth = require('./src/middlewares').auth;




function cargarHome(req, res){
    //const paginado = req.query.paginado === 'false' ? false : true;
    console.log('api works');
    //const ruta=path.join(__dirname+'/views/index.html')
    const ruta=path.join(__dirname,'src','views','index.html');
    //res.send('api works for: '+ req.nombre);


    //res.sendFile(ruta);
    res.render('home',{

        nombre: 'pppp'
    });

}


/*
function cargarTarea(req, res){
    console.log('mostrando la lista de tareas');
    const ruta=path.join(__dirname,'src','views','tareas.html');
    res.render('tareas',{

    
    });

}*/


/*le vamos a pasar un toke, si viene 123 entonces lo dejas pasar, si no
usuario no autenticado*/ 

module.exports=function(app){

    //app.use('/assets', express.static(path.join(__dirname,'assets')));

    app.get('/', auth, cargarHome );
    
    //app.get('/usuarios', middleware, cargarHome);
    /*
    app.get('/usuarios', middleware,function(req, res){
        res.send('lista de usuarios');
    
        console.log();
    });
    */

    /*

    app.get('/usuarios', middleware,function(req, res){
        console.log(req.query );
        res.send('Lista de usuarios para: '+req.nombre);
    
        console.log();
    });*/
    
    
    app.get('*', function(req, res){
        res.status(404);
        res.send('pagina no encontrada');
    });
    


}

