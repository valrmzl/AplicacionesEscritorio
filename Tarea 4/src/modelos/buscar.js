const Noticia={

    buscar: (filtros)=>{
        const new1=[
            {titulo: 'Tarea 1', status : 'nueva'}
        ]

        return new Promise ((resolve, reject)=>{

            console.log("fui a buscar a la base");

            //simular que fui por ellos despues de 2 
            setTimeout(()=>{
                resolve(new1);

            },1000);

        })
    }

}

module.exports = Noticia;