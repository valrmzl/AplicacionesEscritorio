
const { response } = require('express');
const Noticia = require('./../modelos/buscar');


const NoticiasController = {

   listar : (req,res)=>{

    Noticia.buscar()
        .then(response=>{
            res.render('buscador', {buscar: response});
        })
        .catch( error=>{
            res.status(400).send('algo salio mal');
        });
      

   }

}

module.exports= NoticiasController;



