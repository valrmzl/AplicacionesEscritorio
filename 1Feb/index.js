/*
class Persona{
    nombre;

    constructor(nombre){
        this.nombre=nombre;
    }

    saludar(){
        const self=this;
        setTimeout(function(){
            console.log("Hola soy "+this.nombre);
        }.bind(this),100);
    }
}


const yo= new Persona("Valeria");
yo.saludar();
*/

const { setTimeout } = require("timers/promises");

function foo(){
    console.log("foo");
}


function bar(){
    console.log("bar");
}

setTimeout(function(){
    bar();
},0);

foo();