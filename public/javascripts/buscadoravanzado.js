window.addEventListener('load', function(){
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
        <div><a href=/genero?id=${arrayGeneros[i].id}>${arrayGeneros[i].name}</a></div>
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
