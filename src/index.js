import {fetchBreeds,fetchCatByBreed} from './js/cat-api'
import {breedsHandler,catInfoHandler} from './js/tamplates'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    select:document.querySelector('.breed-select'),
    catInfo:document.querySelector('.cat-info'),
    loader:document.querySelector('.loader'),
}

const errorMesaage = 'Oops! Something went wrong! Try reloading the page!'


// 

fetchBreeds()
.then(breeds => {
    refs.select.insertAdjacentHTML('beforeend',breedsHandler(breeds))
})



// 

refs.select.addEventListener('change', function (e) {
    refs.catInfo.innerHTML = '';

    const searchQuery = e.target.value
    fetchCatByBreed(searchQuery)
    .then(cat => { 
        refs.loader.classList.add('visible');
        refs.catInfo.insertAdjacentHTML('beforeend',catInfoHandler(cat))
    })
    
    .finally(() => {refs.loader.classList.remove('visible')})
});

