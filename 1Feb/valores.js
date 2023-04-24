

/*
nombre='Valeria';

function renombrar(n){
    n='Guadalupe';
}

renombrar(nombre);
console.log(nombre);
*/
persona={
    nombre:'Valeria',
    apellido: 'Ramirez',
    correo:'valeria.ramirez@iteso.mx'
};


function renombrar(p){

/* C L O N A C I O N    D E    O B J E T O*/ 
    const nuevo= Object.assign({},p);
    nuevo.nombre='Guadalupe';
}
function renombrar2(p){
    const {...otros}=p;
    console.log("otros", otros);
}

function renombrar3(p){
    const nuevo ={
        status: 'modificado',
        ...p
    };
    console.log(nuevo);
    nuevo.nombre='Pepe';
}

renombrar(persona);
renombrar2(persona);

console.log(persona.nombre);

