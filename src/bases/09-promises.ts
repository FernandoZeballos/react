
const myPromise = new Promise<number>( (resolve, reject) => {

    setTimeout(() => {
        //!quiero mi dinero!! //console.log('2 seconds passed');
        //resolve(100)
        reject('mi amigo se perdio')
    }, 2000);// 2 seconds
} )

myPromise
    .then((myMoney: number) =>{
        console.log(`have got my dinner ${myMoney}`);
    })
    .catch((reason) => {
        console.warn(reason);
    })
    .finally(() => {
        console.log('pues a seguir con mi vida');
    });