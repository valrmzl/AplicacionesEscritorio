
const { response } = require('express');
const Usuario = require('../modelos/usuario');
const jwt=require('jsonwebtoken');


const UsuariosController = {

   listar : (req,res)=>{

    Usuario.find({})
        .then(response=>{
            res.render('usuarios', {usuario: response});
            console.log(response);
        })
        .catch(error =>{
            res.status(400).send('algo salio mal');
        })

    /*

    Usuario.buscar()
        .then(response=>{
            res.render('usuario', {usuario: response});
        })
        .catch( error=>{
            res.status(400).send('algo salio mal');
        });
        */
      

   },

  login:(req,res)=>{
    Usuario.findOne({
        correo:req.body.correo,
        password:req.body.password
    }).then(response=>{
        if(response){
            jwt.sign({
                id: response._id,
                nombre: req.body.nombre,
                correo:response.correo,
                role:response.role

            }, 'holamundo');
            res.send({token});

        }
    })

  },
  registro:(req, res)=>{
    Usuario
        .create({
            nombre: req.body.nombre,
            correo: req.body.correo,
            role: req.body.correo,
            password: req.body.correo,
            status: req.body.correo
        })
        .then(()=>{
            response.send();
        }).catch(err=>{
            res.status(400).send();
        })

  }

}

module.exports= UsuariosController;



