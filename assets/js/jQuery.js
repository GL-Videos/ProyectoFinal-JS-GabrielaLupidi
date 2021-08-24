
//GALERIA DE INICIO

// Agrega las carátulas de las peliculas
$('.contenedorPeliculas').append(
  `<div class="caratulas">
     <img src="./multimedia/caratulas/01.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/02.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/03.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/04.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/05.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/06.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/07.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/08.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/09.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/10.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/11.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/12.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/13.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/14.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/15.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/16.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/17.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/18.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/19.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/20.jpg"/>
   </div>
   <div class="caratulas">
     <img src="./multimedia/caratulas/21.jpg"/>
   </div>`,
 )


//CATEGORÍAS DE PELICULAS Y SERIES

// Creo la constante para llamar el archivo JSON
const categoriasJSON = "../assets/JSON/categorias.json"

//Creo los botones para desplegar la lista de las categorias
$(".listaCategorias").prepend('<button class="btnCategoriaSeries">Series</button>')
$(".listaCategorias").prepend('<button class="btnCategoriaPelis">Peliculas</button>')

//Le asigno una función al boton de Peliculas para que muestre la lista y oculte la lista de Series
$(".btnCategoriaPelis").click(() => { 
  $.getJSON(categoriasJSON, function (resultado, estado) {
        if(estado === "success"){
          // console.log(resultado);
      resultado.forEach(e => {
        $(".listaCategorias").append(
                                        `<a href="../views/catPelis.html" class="listaPelis">${e.categoria}</a>`
        )
      });
    }
  });
  $(".listaSeries").fadeOut("fast");
});

//Le asigno una función al boton de Series para que muestre la lista y oculte la lista de Peliculas
$(".btnCategoriaSeries").click(() => { 
  $.getJSON(categoriasJSON, function (resultado, estado) {
        if(estado === "success"){
          // console.log(resultado);
      resultado.forEach(e => {
        $(".listaCategorias").append(
                                        `<a href="../views/catSeries.html" class="listaSeries">${e.categoria}</a>`
        )
      })}
  });
  $(".listaPelis").fadeOut("fast");
});




//SUSCRIPCIÓN A LAS NOTICIAS
// Creo un botón al final de la página para que el cliente acepte las noticias

$('.jQuery').append('<p id="parrafoRegistro">QUÉRES RECIBIR NUESTRAS NOVEDADES?</p>');
$('.jQuery').append('<button id="btnRegistro">Suscribirme</button>');

// Le asigno un evento al botón para que diga un mensaje cuando lo apreta y que lo mande también a session storage
$('#btnRegistro').on('click', () => {
  $('.jQuery').append('<p id="confirmarRegistro">Solicitud enviada.</p>');
  const registro = $('#confirmarRegistro').text();
  sessionStorage.setItem("Estado:", registro);  
});


// Funcion callback de slide con delay, para darle animación a la publicidad.
$("aside").slideUp(2000, function(){
  $("aside").slideDown(4000);
}).delay(1000); 







