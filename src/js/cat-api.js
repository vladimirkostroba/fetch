const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_omBlQNpPScjpsFe3GFCHVDe9VKvhdUEf6WqVvYam0wtyPOIXJQ3AT97wO8a2YSFC"
  });
  
  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  }; 

  export function fetchBreeds(){
    return fetch('https://api.thecatapi.com/v1/breeds',requestOptions)
    .then(response => response.json())
    .catch((error) => alert(error))
  }

  export function fetchCatByBreed(breedId){
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,requestOptions)
    .then(response => response.json())
    .then(res => res[0])
    .catch((error) => alert(error))
  }

  

