window.addEventListener('load', function(){
var queryString = new URLSearchParams(location.search)
var buscar = queryString.get("buscarSerie")

/*fetch("https://api.themoviedb.org/3/search/tv?api_key=c062382504198a6a2cc69f4b0fcd9319&language=es-ES&query="+buscar+"&page=1&include_adult=false")
.then(function(respuesta) {
  return respuesta.json()
  console.log(respuesta);
})
.then(function(informacion) {
      var arrayBusqueda = informacion.results
      console.log(arrayBusqueda);
      for (var i = 0; i < arrayBusqueda.length; i++) {
        document.querySelector("#seriesbuscador").innerHTML += `
        <div id="hola">
           <a href=detalledeserie.html?id=${arrayBusqueda[i].id}>
           <img class="imagenesgenero" src="https://image.tmdb.org/t/p/original/${arrayBusqueda[i].poster_path}" alt="">
           </a>
        </div>
        `;
      }
})
.catch(function(error) {
  console.log("Error: " + error);
})*/

var pageNum = 2;
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
fetch("https://api.themoviedb.org/3/search/tv?api_key=c062382504198a6a2cc69f4b0fcd9319&language=es-AR&query=" + buscar + "&page="+ pageNum++ +"&include_adult=false")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
        data = data.results
        console.log(data);
        if (data.length > 0) {
          for (var i = 0; i < data.length; i++) {
              var serie = data[i]
              fetch('https://api.themoviedb.org/3/tv/' + serie.id + '?api_key=c062382504198a6a2cc69f4b0fcd9319&language=es-AR')
                  .then(function(response) {
                      return response.json();
                  })
                  .then(function(data) {
                      var serie = data
                      if (serie.poster_path!=null) {
                        document.querySelector("#seriesbuscador").innerHTML += `
                        <div id="hola">
                           <a href=detalledeserie.html?id=${serie.id}>
                           <img class="imagenesgenero" src="https://image.tmdb.org/t/p/original/${serie.poster_path}" alt="">
                           </a>
                        </div>
                        `;

                      }
                  })

                  }
        } else {
    			alert('¡No se encontró nada!');
    			location.href = 'index.html';
    		}
      })
    }
    };



fetch("https://api.themoviedb.org/3/search/tv?api_key=c062382504198a6a2cc69f4b0fcd9319&language=es-AR&query=" + buscar + "&page=1&include_adult=false")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
        data = data.results
        console.log(data);
        if (data.length > 0) {
          for (var i = 0; i < data.length; i++) {
              var serie = data[i]
              fetch('https://api.themoviedb.org/3/tv/' + serie.id + '?api_key=c062382504198a6a2cc69f4b0fcd9319&language=es-AR')
                  .then(function(response) {
                      return response.json();
                  })
                  .then(function(data) {
                      var serie = data
                      if (serie.poster_path!=null) {
                        document.querySelector("#seriesbuscador").innerHTML += `
                        <div id="hola">
                           <a href=detalledeserie.html?id=${serie.id}>
                           <img class="imagenesgenero" src="https://image.tmdb.org/t/p/original/${serie.poster_path}" alt="">
                           </a>
                        </div>
                        `;

                      }
                  })

                  }
        } else {
    			alert('¡No se encontró nada!');
    			location.href = 'index.html';
    		}
      })
                .catch(function(err) {
                    console.error(err);
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

//lista de generos
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
