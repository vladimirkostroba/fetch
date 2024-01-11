import {fetchBreeds,fetchCatByBreed} from './js/cat-api'
import {breedsHandler,catInfoHandler} from './js/tamplates'

const refs = {
    select:document.querySelector('.breed-select'),
    catInfo:document.querySelector('.cat-info'),
}

console.log(refs.catInfo);


// 

fetchBreeds()
.then(breeds => (
    refs.select.insertAdjacentHTML('afterbegin',breedsHandler(breeds))
    ))

// 

refs.select.addEventListener('change', function (e) {
    refs.catInfo.innerHTML = '';

    const searchQuery = e.target.value
    fetchCatByBreed(searchQuery).then(cat => 
        refs.catInfo.insertAdjacentHTML('afterbegin',catInfoHandler(cat)))
});

// fetchCatByBreed('acur').then(res => console.log(res))