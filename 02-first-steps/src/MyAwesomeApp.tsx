import type { CSSProperties } from "react";

const firstName = 'Fernando';
const lastName = 'zeballos';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isActive = false;

const address = {
    zipCode: 'ABC-123',
    country: 'Argentina',
};

const myStyle: CSSProperties= {
    backgroundColor: '#09f',
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
};
export const MyAwesomeApp = () => {
    return (
        <>
         <h1>{firstName}</h1>
         <h3>{lastName}</h3>

         <p>{favoriteGames.join(', ')}</p>
         <p>{2 + 2}</p>

         <h1>{isActive ? 'Active' : 'Inactive'}</h1>

         <p style={myStyle}>
            {JSON.stringify(address)}
         </p>
        </>
    );
};
/*export function MyAwesomeApp() {

    return (
        <>
        <h1>Fernando</h1>
        <h3>Zeballos</h3>
        
        </>
    )};*/