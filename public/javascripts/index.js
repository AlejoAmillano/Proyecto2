window.addEventListener('load', function(){

// APIKey : c062382504198a6a2cc69f4b0fcd9319
var queryString = location.search
var queryStringObj = new URLSearchParams(queryString);
var formBtn = document.querySelector(".btn")
var formInput = document.querySelector("#buscador")
console.log(formBtn);
console.log(formInput);
formBtn.addEventListener("click", function(event){
  if (formInput.value.length < 3) {
    alert("Mínimo 3 caracteres para realizar la búsqueda.")
    event.preventDefault();
  }
})

// CARRUSEL

fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=c062382504198a6a2cc69f4b0fcd9319&language=es-AR&page=1')
  .then(function(response) {
    return response.json();
    console.log(response);
 })
  .then(function(objetoRespuesta) {
    console.log(objetoRespuesta);
    var arraySeries = objetoRespuesta.results
    var contenedorCarrousel = document.querySelector("#carrusel")
    for(var i = 0;i < 5; i++){

    contenedorCarrousel.innerHTML +=`
        <li>
            <div class="carrusel uk-position-cover uk-animation-kenburns uk-transform-origin-center-left">
              <img src="https://image.tmdb.org/t/p/original/${arraySeries[i].backdrop_path}" alt="">
            </div>
            <div class="info-serie-carrusel">
              <h1 class="titulo">${arraySeries[i].name}</h1>
              <h4 class="puntuacion">${arraySeries[i].vote_average} / 10&nbsp;&nbsp;<i class="fas fa-star"></i></h4>
              <p class="parrafo">${arraySeries[i].overview}</p>
              <h4><a  class="ver-mas" href=detalledeserie.html?id=${arraySeries[i].id}>VER MÁS</a></h4>
          </div>
        </li>
    `;
    }
})
 .catch(function(errores){
  console.log(errores)
});


// INDEX Series

var contenedorPopulares = document.querySelector("#movie-list1");

fetch('https://api.themoviedb.org/3/tv/popular?api_key=c062382504198a6a2cc69f4b0fcd9319&language=es-AR&page=1')
  .then(function(response) {
    return response.json();
    console.log(response);
 })
 .then(function(information) {
   var series = information.results
   for(var i = 0; i < 15; i++){
     contenedorPopulares.innerHTML += `
     <li>
         <div class="uk-panel">
            <a href=detalledeserie.html?id=${series[i].id}>
            <img src="https://image.tmdb.org/t/p/original/${series[i].poster_path}" alt="">
            </a>
         </div>
     </li>
     `;
   }
})
 .catch(function(errores){
  console.log(errores)
});

var contenedorValoradas = document.querySelector("#movie-list2");

fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=c062382504198a6a2cc69f4b0fcd9319&language=es-AR&page=1')
  .then(function(response) {
    return response.json();
    console.log(response);
 })
 .then(function(information) {
   var series = information.results
   for(var i = 0; i < 15; i++){
     contenedorValoradas.innerHTML += `
     <li>
         <div class="uk-panel">
            <a href=detalledeserie.html?id=${series[i].id}>
            <img src="https://image.tmdb.org/t/p/original/${series[i].poster_path}" alt="">
            </a>
         </div>
     </li>
     `;
   }
})
 .catch(function(errores){
  console.log(errores)
});

var contenedorHoy = document.querySelector("#movie-list3");

fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=c062382504198a6a2cc69f4b0fcd9319')
  .then(function(response) {
    return response.json();
    console.log(response);
 })
 .then(function(information) {
   var series = information.results
   for(var i = 0; i < 15; i++){
     contenedorHoy.innerHTML += `
     <li>
         <div class="uk-panel">
            <a href=detalledeserie.html?id=${series[i].id}>
            <img src="https://image.tmdb.org/t/p/original/${series[i].poster_path}" alt="">
            </a>
         </div>
     </li>
     `;
   }
})
 .catch(function(errores){
  console.log(errores)
});

 //generos

  var listaParaGeneros = document.querySelector("#genres-list");

fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=c062382504198a6a2cc69f4b0fcd9319')
  .then(function(response) {
    return response.json();
 })
 .then(function(information) {
   console.log(information)
   var arrayGeneros = information.genres

   for(var i = 0; i < arrayGeneros.length; i++){
    listaParaGeneros.innerHTML += `
      <div><a href=seriesporgenero.html?id=${arrayGeneros[i].id}&name=>${arrayGeneros[i].name}</a></div>
     `;
   }

 })
  .catch(function(errores){
   console.log(errores)
 });
 var formBtn = document.querySelector(".btn")
 var formInput = document.querySelector("#buscador")
 console.log(formBtn);
 console.log(formInput);
 formBtn.addEventListener("click", function(event){
   if (formInput.value.length < 3) {
     alert("Mínimo 3 caracteres para realizar la búsqueda.")
     event.preventDefault();
   }
 })

})
