window.addEventListener('load',function(){

  var queryStringObj = new URLSearchParams(window.location.search);


  var generoBuscado = queryStringObj.get('genre');
  var añoEstreno = queryStringObj.get('date_release')
  var ordenVotos = queryStringObj.get('order')

  var pageNum = 2;
  window.onscroll = function(ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  fetch('https://api.themoviedb.org/3/discover/tv?api_key=c062382504198a6a2cc69f4b0fcd9319&language=en-US&sort_by='+ ordenVotos +'&first_air_date_year='+ añoEstreno +'&page='+ pageNum++ +'&timezone=America%2FNew_York&with_genres=' + generoBuscado + '&without_genres=32&include_null_first_air_dates=false')
    .then(function(response){
      return response.json();
    })
    .then(function(objetoLiteral){

      var resultados = objetoLiteral.results;

      var listaResultados = document.querySelector('#resultado-avanzado');
      for (var unResultado of resultados) {

        if (unResultado.poster_path != null) {

          listaResultados.innerHTML += `
          <div id="hola">
             <a href=detalledeserie.html?id=${unResultado.id}>
             <img class="imagenesgenero" src="https://image.tmdb.org/t/p/original/${unResultado.poster_path}" alt="">
             </a>
          </div>
          `;
        }
      }


      listaResultados.innerHTML = contenidoFinal;

    })
  }
  };



  fetch('https://api.themoviedb.org/3/discover/tv?api_key=c062382504198a6a2cc69f4b0fcd9319&language=en-US&sort_by='+ ordenVotos +'&first_air_date_year='+ añoEstreno +'&page=1&timezone=America%2FNew_York&with_genres=' + generoBuscado + '&without_genres=32&include_null_first_air_dates=false')
    .then(function(response){
      return response.json();
    })
    .then(function(objetoLiteral){
      var resultados = objetoLiteral.results;
      var listaResultados = document.querySelector('#resultado-avanzado');
      for (var unResultado of resultados) {

        if (unResultado.poster_path != null) {

          listaResultados.innerHTML += `
          <div id="hola">
             <a href=detalledeserie.html?id=${unResultado.id}>
             <img class="imagenesgenero" src="https://image.tmdb.org/t/p/original/${unResultado.poster_path}" alt="">
             </a>
          </div>
          `;
        }
      }


      listaResultados.innerHTML = contenidoFinal;

    })
    //GENEROS
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
