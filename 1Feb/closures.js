

function sumar(a){
    return function(b){
        return a+b;
    }
}

function sumar2(a){
    return (b)=> a+b;
}

const aaa =  (a) => (b) => a + b;
/**la funcion retorna una funcion */
const resultado = sumar(5) (2);
const resultado2 = sumar2(5) (2);
const resultado3 = sumar3(5) (2);

console.log(resultado);
console.log(resultado2);
console.log(resultado3);