!function(){var e={method:"GET",headers:new Headers({"Content-Type":"application/json","x-api-key":"live_omBlQNpPScjpsFe3GFCHVDe9VKvhdUEf6WqVvYam0wtyPOIXJQ3AT97wO8a2YSFC"}),redirect:"follow"};var n={select:document.querySelector(".breed-select"),catInfo:document.querySelector(".cat-info"),loader:document.querySelector(".loader")};fetch("https://api.thecatapi.com/v1/breeds",e).then((function(e){return e.json()})).catch((function(e){return alert(e)})).then((function(e){n.select.insertAdjacentHTML("beforeend",e.map((function(e){var n=e.id,t=e.name;return'<option value="'.concat(n,'">').concat(t,"</option>")})).join(""))})),n.select.addEventListener("change",(function(t){n.catInfo.innerHTML="";var c,a=t.target.value;(c=a,fetch("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(c),e).then((function(e){return e.json()})).then((function(e){return e[0]})).catch((function(e){return alert(e)}))).then((function(e){var t,c,a;n.catInfo.insertAdjacentHTML("beforeend",(c=(t=e).url,a=t.breeds,'<div class="overlay">\n  <img src="'.concat(c,'" alt="img" width="400">\n  <div class="info">\n    <h2 class="title">').concat(a[0].name,'</h2>\n    <p class="description">').concat(a[0].description,'</p>\n    <p class="temperament"><b>Temperament:</b> ').concat(a[0].temperament,"</p>\n  </div>\n  </div>"))),n.loader.classList.remove("is-hiden")})).finally((function(){n.loader.classList.add("is-hiden")}))}))}();
//# sourceMappingURL=index.c5262e35.js.map