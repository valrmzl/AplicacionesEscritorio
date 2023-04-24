
const { response } = require('express');
const Tarea = require('./../modelos/tareas');


const TareasController = {

   listar : (req,res)=>{

    Tarea.find({})
        .then(response=>{
            res.render('tareas', {tareas: response});
            console.log(response);
        })
        .catch(error =>{
            res.status(400).send('algo salio mal');
        })

    /*

    Tarea.buscar()
        .then(response=>{
            res.render('tareas', {tareas: response});
        })
        .catch( error=>{
            res.status(400).send('algo salio mal');
        });
        */
      

   },

   actualizar: (req,res) =>{
    res.send('tarea actualizada correctamente');
   },

   tareaID: (req, res)=>{
    const id= req.params.id;
    res.send('mostrando tarea ', id);
   }

}

module.exports= TareasController;



