const {Schema,  model }= require('mongoose');

const tareaSchema= new Schema({
    //la estrctura de la tarea 
    titulo: {type: String},
    descripcion: {type: String},
    status : {type: String, default: 'New'}
});



//espera que sea en plural 
module.exports= model('tareas',tareaSchema);
/*
const Tarea ={

    //es lo mismo que el del listra del controller
    //pero tiene otro nombre solo para identificar
    //aqui no hay req y res, porque el controoller
    //ya lo tiene
    //solo recibo los valores que yo necesite
    buscar: (filtros) =>{
        const tareas =[
            {titulo: 'Tarea 1', status : 'nueva'},
            {titulo: 'Tarea 2', status : 'nueva'},
            {titulo: 'Tarea 3', status : 'en progreso'},
            {titulo: 'Tarea 4', status : 'en progreso'},
            {titulo: 'Tarea 5', status : 'termianda'}
        ]

        return new Promise ((resolve, reject)=>{

            console.log("fui a buscar a la base");

            //simular que fui por ellos despues de 2 
            setTimeout(()=>{
                resolve(tareas);

            },1000);

        })

    }

}

module.exports = Tarea;
*/