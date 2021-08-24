
//Entidades
class Votacion {
    constructor(pelicula, director, pais, genero, id) {
        this.pelicula = pelicula;
        this.director = director;
        this.pais = pais;
        this.genero = genero;
        this.id = id
    }
};

// Arrays
let votos = [];

// Selectores
let btnCargar = document.getElementById("cargar");
let tablaPeliculas = document.getElementById("tablaPeliculas");

// Funciones
function cargarVotos() {
    let pelicula = document.getElementById("pelicula").value;
    let director = document.getElementById("director").value;
    let pais = document.getElementById("pais").value;
    let genero = document.getElementById("genero").value;
    let json = JSON.parse(localStorage.getItem("votos"));

    //Condicional para cargar los datos
    if (localStorage.getItem("votos") != null) {
        let index = json.length + 1;
        let votaciones = new Votacion(pelicula, director, pais, genero, index);
        json.push(votaciones);
        localStorage.setItem("votos", JSON.stringify(json));
    } else {
        localStorage.clear();
        let index = 1;
        let votaciones = new Votacion(pelicula, director, pais, genero, index);
        votos.push(votaciones);
        localStorage.setItem("votos", JSON.stringify(votos));
    }
}
function imprimirVotos() {
    let imprimir = JSON.parse(localStorage.getItem("votos"))
    //Condicional para imprimir los datos
    if (imprimir != null) {
        imprimir.forEach(element => {
            let tabla = document.createElement("tr");

            let th = document.createElement("th");
            th.setAttribute("class", "col-1");
            th.textContent = `${imprimir.indexOf(element)}`;
            tabla.appendChild(th);

            let th1 = document.createElement("th");
            th1.setAttribute("class", "col-2");
            th1.textContent = `${element.pelicula}`;
            tabla.appendChild(th1);

            let th2 = document.createElement("th");
            th2.setAttribute("class", "col-2");
            th2.textContent = `${element.director}`;
            tabla.appendChild(th2);

            let th3 = document.createElement("th");
            th3.setAttribute("class", "col-2");
            th3.textContent = `${element.pais}`;
            tabla.appendChild(th3);

            let th4 = document.createElement("th");
            th4.setAttribute("class", "col-2");
            th4.textContent = `${element.genero}`;
            tabla.appendChild(th4);

            let th5 = document.createElement("th");
            th5.setAttribute("class", "col-2");
            tabla.appendChild(th5);
            let botonX = document.createElement("button");
            botonX.setAttribute("class", "botonBorrar");
            botonX.setAttribute("onclick", `borrarVotos(${element.id})`);
            botonX.textContent = "X";
            th5.appendChild(botonX);
            tablaPeliculas.appendChild(tabla);
        });
    } else {
        console.log("El usuario no cargo ninguna película");
    }
}

//Función para borrar los datos ingresados
function borrarVotos(id) {
    let borrar = JSON.parse(localStorage.getItem("votos"));
    let actualizo = borrar.filter(e => e.id != id);
    localStorage.setItem("votos", JSON.stringify(actualizo));
    location.reload();
}



//Eventos
btnCargar.addEventListener("click", cargarVotos);

//Lógica
imprimirVotos();