export function breedsHandler(arr){
    const markup = arr.map(({id,name}) => 
     `<option value="${id}">${name}</option>`
    ).join('')

    return markup
}