export function breedsHandler(arr){
    const markup = arr.map(({id,name}) => 
     `<option value="${id}">${name}</option>`
    ).join('')

    return markup
}

export function catInfoHandler({url,breeds}){
    return `<div class="overlay">
  <img src="${url}" alt="img" width="400">
  <div class="info">
    <h2 class="title">${breeds[0].name}</h2>
    <p class="description">${breeds[0].description}</p>
    <p class="temperament"><b>Temperament:</b> ${breeds[0].temperament}</p>
  </div>
  </div>`
}
