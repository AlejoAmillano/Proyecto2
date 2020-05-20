window.addEventListener('load', function(){
var queryStringObject = new URLSearchParams(window.location.search)
var id = queryStringObject.get('id')
console.log(id);
var name = queryStringObject.get('name')
console.log(name);
var page = queryStringObject.get("page")
console.log(page)

var pageNum = 2;
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
 fetch("https://api.themoviedb.org/3/discover/tv?api_key=c062382504198a6a2cc69f4b0fcd9319&sort_by=popularity.desc&page=" + pageNum++ + "&with_genres="+id)
 .then(function (respuesta){
   return respuesta.json();
 })
 .then(function(information) {
   console.log(information);
   var seriesGenero = document.querySelector("#seriesgenero")
   var series = information.results
   for(var i = 0; i < series.length; i++){
     seriesGenero.innerHTML += `
     <div id="hola">
        <a href=detalledeserie.html?id=${series[i].id}>
        <img class="imagenesgenero" src="https://image.tmdb.org/t/p/original/${series[i].poster_path}" alt="">
        </a>
     </div>
   `;
   }
})
}
};

fetch("https://api.themoviedb.org/3/discover/tv?api_key=c062382504198a6a2cc69f4b0fcd9319&sort_by=popularity.desc&page=1&with_genres="+id)
.then(function (respuesta){
  return respuesta.json();
})
.then(function(information) {
  console.log(information);
 var seriesGenero = document.querySelector("#seriesgenero")
  var series = information.results
  for(var i = 0; i < series.length; i++){
    seriesGenero.innerHTML += `
    <div id="hola">
       <a href=detalledeserie.html?id=${series[i].id}>
       <img class="imagenesgenero" src="https://image.tmdb.org/t/p/original/${series[i].poster_path}" alt="">
       </a>
    </div>
  `;
  }
})


var listaParaGeneros = document.querySelector("#genres-list");
fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=c062382504198a6a2cc69f4b0fcd9319&')
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
