import { heroes, type Hero, type Owner } from "../data/heroes.data"



const getHeroById = (id:number): Hero | undefined => {
    const hero = heroes.find( (hero) => {
        return hero.id === id;
    });

    // if (!hero) {
    //     throw new Error(`Hero not found in id ${id}`);
    // }

    return hero;
};

console.log(getHeroById(7))


/*tarea
* getHeroByOwner => Hero[]
* Filtra heroes por su propietario (owner)
* @param Owner - El propietario por el cual filtrar (DC o Marvel), usar la enumeracion Owner
* @returns array de heroes pertenecientes al propietario
*/

// export const getHeroByOwner = (owner:Owner): Hero[] => {
//     return heroes.filter( (hero) => {
//         return hero.owner === owner;
//     });
// };

//export const getHeroByOwner = (owner: Owner) =>
//    heroes.filter((hero) => hero.owner === owner);

export const getHeroesByOwner = (owner:Owner) => {
    const heroesByOwner = heroes.filter(hero => hero.owner === owner)
    return heroesByOwner;
}