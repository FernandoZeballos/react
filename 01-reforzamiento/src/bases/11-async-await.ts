import type { GiphyRandomResponse } from "../data/giphy.response";



const API_KEY = 'hFsVqJImdDZZFdZPFsRGTV8y8H6JTE5I';

const myRequest = fetch(`
    https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);


const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    
    document.body.append(imgElement);
} 

const getRamdomGifUrl = async(): Promise<string> => {
const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

//const data = (await response.json()) as GiphyRandomResponse;
const {data}: GiphyRandomResponse = await response.json(); //es igual al de la linea 24

return data.images.original.url;
};

getRamdomGifUrl().then(createImageInsideDOM);


