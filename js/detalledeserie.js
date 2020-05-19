window.addEventListener('load', function(){
var params = (new URL(document.location)).searchParams;
var id = params.get('id');
window.


//API Key: c062382504198a6a2cc69f4b0fcd9319

// INFO SERIE

fetch("https://api.themoviedb.org/3/tv/"+ id +"?api_key=c062382504198a6a2cc69f4b0fcd9319")
  .then(function(respuesta) {
    return respuesta.json()
    console.log(respuesta);
  })
  .then(function(informacion) {
    console.log(informacion);
    var serieDetalle = informacion
    for (var i = 0; i < 1; i++){
      document.querySelector(".container").innerHTML +=`
      <div class="Title-big">
        <h1>${serieDetalle.name}</h1><p class="rating">${serieDetalle.vote_average} / 10 <i class="fas fa-star"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${serieDetalle.first_air_date}</p>
      </div>
      `;
     document.querySelector(".generos").innerHTML +=`
     <div class="serie-info-box serie-info-box--genre">
       <div class="serie-info-box-title">Genero</div>

     </div>
     `;
     document.querySelector(".directors").innerHTML +=`
     <div class="serie-info-box serie-info-box--director">
       <div class="serie-info-box-title">Creado&nbsp;por</div>
     </div>
     `;
     document.querySelector(".sinopsis").innerHTML +=`
     <div class="serie-info-box serie-info-box--stars">
       <div class="serie-info-box-title">Sinopsis</div>
       <div class="serie-info-box-content">${serieDetalle.overview}</div>
     </div>
     `;
     document.querySelector(".serie-image").innerHTML +=`
     <img src="https://image.tmdb.org/t/p/original/${serieDetalle.poster_path}" alt="">
     `;
    }
    var arrayGenero = serieDetalle.genres
    for (var i = 0; i < arrayGenero.length; i++) {
      var nameGenero = arrayGenero[i].name
      var idGenero = arrayGenero[i].id
      document.querySelector(".generos").innerHTML += `
        <div class="serie-info-box-content">
        <a href=seriesporgenero.html?id=${idGenero}&genero=${nameGenero}><span class="titulogenero">${nameGenero}&nbsp;</span></a>
        </div>
      `;
    }
    var arrayGenero = serieDetalle.created_by
    for (var i = 0; i < arrayGenero.length; i++) {
      var directores = arrayGenero[i].name
      document.querySelector(".directors").innerHTML +=  `
        <div class="serie-info-box-content">${directores}</div>
      `;
    }
  })
  .catch(function(errores){
   console.log(errores)
 });

 var contenedorSimilares = document.querySelector("#similares");

 fetch('https://api.themoviedb.org/3/tv/'+id+'/similar?api_key=c062382504198a6a2cc69f4b0fcd9319&language=en-US&page=1')
   .then(function(response) {
     return response.json();
     console.log(response);
  })
  .then(function(information) {
    var series = information.results
    for(var i = 0; i < series.length; i++){
      contenedorSimilares.innerHTML += `
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

// TRAILER
fetch("https://api.themoviedb.org/3/tv/"+ id +"/videos?api_key=c062382504198a6a2cc69f4b0fcd9319")
  .then(function(respuesta) {
    return respuesta.json()
    console.log(respuesta);
  })
  .then(function(informacion) {
    var serie = informacion.results
    contenedorTrailer = document.querySelector("#trailerserie")
    contenedorTrailer.innerHTML +=`
    <button class="uk-modal-close-outside" type="button" uk-close></button>
    <iframe src="https://www.youtube.com/embed/${serie[0].key}" width="800" height="500" frameborder="0" uk-video></iframe>
     `;

  })
  .catch(function(error) {
    console.log("Error: " + error);
  })


  //lista de GENEROS
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
