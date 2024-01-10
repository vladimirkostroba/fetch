import {fetchBreeds,fetchCatByBreed} from './js/cat-api'
import {breedsHandler} from './js/tamplates'

const refs = {
    select:document.querySelector('.breed-select'),
    catInfo:document.querySelector('.cat-info'),
}

console.log(refs.catInfo);

// 

fetchBreeds()
.then(breeds => breedsHandler(breeds))
.then(markup => refs.select.insertAdjacentHTML('afterbegin',markup))

// 

fetchCatByBreed('acur').then(res => console.log(res))