
//--------------------------------------------------VARIABLES--------------------------------------------------------------
  
let pregunta = document.getElementsByClassName('pregunta')[0];
let respuesta = document.getElementsByClassName('respuesta')[0];
let check = document.getElementsByClassName('chequeo')[0];
let puntaje = 0;



//--------------------------------------------------ARRAYS-----------------------------------------------------------------


/* Variable que contiene un objeto con un conjunto de arrays con las preguntas
y las posibles respuestas, el número final indica el indice de la respuesta correcta */

let conjuntoPreguntas = {
      '¿Cuál es la película que más Oscars ha ganado en la historia?' : ['Ben Hur', 'Titanic', 'El señor de los anillos', 1],
      
      '¿En qué película de la Saga de Star Wars la princesa Leia empieza a usar la fuerza?' : ['Episodio IV', 'Episodio V' , 'Episodio VI', 1],
      
      '¿Quien es el protagonista de TITANIC?' : ['Leonardo DiCaprio', 'Brad Pitt', 'Matt Damon', 0],

      '¿Cómo se llama el mejor amigo de Bart Simpson?' : ['Nelson', 'Barney', 'Milhouse', 2],

      '¿En qué temporada el personaje de Will de STRANGER THINGS es poseído por El Desuellamentes?' : ['Uno', 'Dos', 'Tres', 1],

      '¿Que serie trata sobre un grupo de delincuentes que asaltan la Fábrica Nacional de Moneda y Timbre en España?' : ['Vis a vis', 'La casa de papel', 'Las chicas del cable', 1],

      '¿Cuantas películas se estrenaron de EL PADRINO?' : ['Uno', 'Dos', 'Tres', 2],

      '¿En qué año se estrenó DANZA CON LOBOS?' : ['1985', '1987', '1990', 2],

      '¿Cómo se llama el café donde siempre se reunen los protagonistas de FRIENDS?' : ['Central Perk', 'Central Park', 'Coffee Park', 0],

      '¿En la serie COMO CONOCI A TU MADRE, de quien estaba enamorado el protagonista Ted Mosby?' : ['Lily', 'Robin', 'Stella', 1],

      '¿Quién dirigió EL LOBO DE WALL STREET?' : ['Martin Scorsese', 'Brian de Palma', 'Francis Ford Coppola', 0],

      '¿De que película son protagonistas Buddy y Buzz Lightyear?' : ['Los Simpson', 'Toy Story', 'Monsters Inc', 1],

      '¿Cuál es el estampado de la cortina de baño de Leonard y Sheldon en THE BIG BANG THEORY?' : ['Darth Vader', 'La tabla periódica', 'Star Wars', 1],

      '¿Cómo se llama el socio de Walter White en la serie BREAKING BAD?' : ['Hank', 'Saul', 'Jesse', 2],

      '¿Qué actor NO aparece en ENTREVISTA CON UN VAMPIRO?' : ['George Clooney', 'Brad Pitt', 'Antonio Banderas', 0],
    };


//------------------------------------------------FUNCIONES-----------------------------------------------------------------

    
function cargarPreguntas(puntos) {
// Función que carga las preguntas en la trivia
// Toma la pregunta actual basada en la variable 'actual'

  let objetoPregunta = Object.keys(conjuntoPreguntas)[puntos];
  
  pregunta.innerHTML = '';
  pregunta.innerHTML = objetoPregunta;    
}

function cargarRespuestas(puntos) {
// Esta función carga todas las posibles respuestas de la pregunta dada.
// Toma el indice de la respuesta correcta.

  let objetoRespuesta = conjuntoPreguntas[Object.keys(conjuntoPreguntas)[puntos]];
  
  respuesta.innerHTML = '';
  
  for (let i = 0; i < objetoRespuesta.length -1; i += 1) {
    let crearDiv = document.createElement('div'),
        texto = document.createTextNode(objetoRespuesta[i]);
    
    crearDiv.appendChild(texto);      
    crearDiv.addEventListener("click", checkRespuesta(i, objetoRespuesta));
    
    
    respuesta.appendChild(crearDiv);
  }
}

function checkRespuesta(i, arr) {
  /* Esta es la función que se ejecutará cuando se haga clic en una de las respuestas
  y ver si es la correcta*/
  // Cuando llegue la última pregunta se corta el juego.
  
  return function () {
    let respuestaElegida = i,
        respuestaCorrecta = arr[arr.length-1];
    
    if (respuestaElegida === respuestaCorrecta) {
      comprobarChequeo(true);             
    } else {
      comprobarChequeo(false);                        
    }
    
    if (puntaje < Object.keys(conjuntoPreguntas).length -1) {
      puntaje += 1;
      
      cargarPreguntas(puntaje);
      cargarRespuestas(puntaje);
    } else {
      pregunta.innerHTML = 'Gracias por jugar!';
      respuesta.innerHTML = '';
    }
                            
  };
}

function comprobarChequeo(booleano) {
// Función para que marque si la respuesta fue o no correcta

  let crearDiv = document.createElement('div'),
      txt       = document.createTextNode(puntaje + 1);
  
  crearDiv.appendChild(txt);
  
  if (booleano) {
    
    crearDiv.className += 'correcta';
    check.appendChild(crearDiv);
  } else {
    crearDiv.className += 'falsa';
    check.appendChild(crearDiv);
  }
}

//----------------------------------------------LOGICA-------------------------------------------------------------

cargarPreguntas(puntaje);
cargarRespuestas(puntaje);

