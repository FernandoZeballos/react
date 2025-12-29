const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
};
const { key, age, name } = person;  //en la desestructuracion con un objeto no es importante el orden, pero para los arreglos SI.

// const name = person.name;
// const age = person.age;
// const key = person.key;

console.log({ name, age, key });

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}


const useContex = ({ key, name, age, rank = 'sin rango'}: Hero) => {
    //    const {name,age,key,rank} = hero;
    return {
        keyName: key,
        user: {
            name,//name:name typescript lo autocompleta internamente
            age,
        },
        rank: rank,
    };
};

const { rank, keyName, user: { name:username, age:userage } } = useContex(person);
console.log(rank, keyName, username, userage);