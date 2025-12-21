const characterNames: string[] = ['Goku', 'Vegeta', 'Trunks']

const [, , Trunks] = characterNames;

console.log({ Trunks });

const returnsArrayFn = () => {
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnsArrayFn();

console.log({ letters, numbers });


const useState = (value: string) => {

    return [
        value,
        (searchValue: string) => {
            console.log(searchValue);
        }
    ] as const;

}

const [name, setName] = useState('Goku');

console.log({ name }); //Goku
setName('Vegeta'); // print Vegeta