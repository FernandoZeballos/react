function greet(name: string) {
    return `Hola ${name}`
}

const greet2 = (name: string) => `Hola ${name}`;

// greet2 = function() {  //las funciones tradicionales y las arrow functions son iguales pero las arrow functions son mas modernas y estrictas
//     return`hola Pedro`;
// }


const message = greet('Gokuu..')
const message2 = greet2('Vegeta')

console.log(message, message2)

interface User {
    uid: string;
    userName: string;
}

function getUser(): User {
    return {
        uid: 'ABC-123',
        userName: 'El_Papi23'
    }
}


const getUser2 = () => ({
    uid: 'ABC-123',
    username: 'El_Papi23'
    })


const user = getUser();
const user2 = getUser2();
console.log(user, user2);

const myNumbers: number[] = [1,2,3,4,5];

// myNumbers.forEach(function(value) {
//     console.log({ value })
// })
//------------0---------------0------------------------------------------------------
//function(value) {             esto viene de la funcion de arriba
//     console.log({ value })   y se lo conoce como callback, es una simple funcion comun y corriente
// }                            que usualmente se pasa como un argumento a un metodo

// myNumbers.forEach((value) => {  //arrow function: nosotros tenemos una funcion cuyo valor(ej:value) es el valor de cada elemento del array
// console.log(value)              //osea un valor es instaciado, para que otro valor pueda ser instanciado
// });

myNumbers.forEach((value, index, Arr)=>{
    console.log(value,index,Arr)
});
