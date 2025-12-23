import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemInCart: ItemInCart[] = [
    {productName: 'Nintendo Switch', quantity: 1},
    {productName: 'Pro controller', quantity: 2},
    {productName: 'Super Smash', quantity: 5},

];


export function FirstStepsApp() {

    return (
        <>
            <h1>Carrito de compras</h1>

            {
                itemInCart.map( ({productName, quantity}) => (
                    <ItemCounter key={productName}name={productName} quantity={quantity}/>
                ))
            }

            {/* <ItemCounter name="Nintendo switch 2" quantity={1}/>
            <ItemCounter name="Pro controller" quantity={2}/>
            <ItemCounter name="Super Smash" quantity={3}/>
            <ItemCounter name="Super Mario" quantity={3}/> */}

        </>
    )
}