import {fetchBreeds,fetchCatByBreed} from './js/cat-api'
import {breedsHandler,catInfoHandler} from './js/tamplates'

const refs = {
    select:document.querySelector('.breed-select'),
    catInfo:document.querySelector('.cat-info'),
    loader:document.querySelector('.loader'),
}

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
        refs.catInfo.insertAdjacentHTML('beforeend',catInfoHandler(cat))
        refs.loader.classList.remove('is-hiden');
    })
    .finally(() => {refs.loader.classList.add('is-hiden')})
});

