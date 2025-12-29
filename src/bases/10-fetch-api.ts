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

myRequest
    .then((response) => response.json())
    .then(({ data}: GiphyRandomResponse) => { 
        const imageUrl =data.images.original.url;
        createImageInsideDOM(imageUrl);
    })
    .catch((error) => console.log(error))
    .finally(() => console.log('finally'))
;
