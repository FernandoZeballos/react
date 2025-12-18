interface Person {
    firstName: string;
    lastName: string;
    age: number;

    address:Address;
}

interface Address {
    postalCode: string;
    city: string
    } 


const ironman: Person = {
    firstName: 'tony',
    lastName: 'stark',
    age: 45,
    address: {
        postalCode: 'ABC-123',
        city: 'New York',
    },
};


console.log(ironman);

// const spiderman = structuredClone(ironman);

// spiderman.firstName = 'peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 22;
// spiderman.address.city = 'San jose';

// console.log(ironman, spiderman);
