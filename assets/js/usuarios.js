//VARIABLES

const fondoLogin = document.querySelector(".fondoLogin");
const fondoRegistro = document.querySelector(".fondoRegistro");
const frenteUsuarios = document.querySelector(".frenteUsuarios");
const formularioLogin = document.querySelector(".formularioLogin");
const formularioRegistro = document.querySelector(".formularioRegistro");
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
const popRegistro = document.getElementById("popRegistro");

//SELECTORES

document.getElementById("btnIniciar").addEventListener("click", iniciarSesion);
document.getElementById("btnRegistro").addEventListener("click", registro);
document.getElementById("btnSesion").addEventListener("click", sesionUsuario);
document.getElementById("btnEnviar").addEventListener("click", enviarRegistro);
document.getElementById("btnSesion").addEventListener("click", confirmarSesion);
document.getElementById("btnEnviar").addEventListener("click", confirmarRegistro);
window.addEventListener("queries", anchoPagina);


//FUNCIONES

//Hago una función para acomodar las media queries de los formularios
function anchoPagina (){
    if (window.innerWidth > 850){
        fondoRegistro.style.display = "block";
        fondoLogin.style.display = "block";
    }else{
        fondoRegistro.style.display = "block";
        fondoRegistro.style.opacity = "1";
        fondoLogin.style.display = "none";
        formularioLogin.style.display = "block";
        frenteUsuarios.style.left = "0px";
        formularioRegistro.style.display = "none";   
    }
}

anchoPagina();

//Le doy efecto para que cuando seleccione iniciar sesión se oculte el registro
function iniciarSesion(){
    if (window.innerWidth > 850){
        formularioLogin.style.display = "block";
        frenteUsuarios.style.left = "10px";
        formularioRegistro.style.display = "none";
        fondoRegistro.style.opacity = "1";
        fondoLogin.style.opacity = "0";
    }else{
        formularioLogin.style.display = "block";
        frenteUsuarios.style.left = "0px";
        formularioRegistro.style.display = "none";
        fondoRegistro.style.display = "block";
        fondoLogin.style.display = "none";
    }
}

//Le doy efecto para que cuando seleccione registrarse se oculte iniciar sesión
function registro(){
    if (window.innerWidth > 850){
        formularioRegistro.style.display = "block";
        frenteUsuarios.style.left = "410px";
        formularioLogin.style.display = "none";
        fondoRegistro.style.opacity = "0";
        fondoLogin.style.opacity = "1";
    }else{
        formularioRegistro.style.display = "block";
        frenteUsuarios.style.left = "0px";
        formularioLogin.style.display = "none";
        fondoRegistro.style.display = "none";
        fondoLogin.style.display = "block";
        fondoLogin.style.opacity = "1";
    }
}

//Envío el nombre de usuario a sessionStorage
function sesionUsuario() {
    let usuario = document.getElementById("usuario");
    sessionStorage.setItem("Inicio Sesión:", usuario.value);
}

//Envío los datos de registro al localStorage
function enviarRegistro() {
    let nombreUsuario = document.getElementById("nombreUsuario");
    let email = document.getElementById("email");
    let contrasenia = document.getElementById("contrasenia");

    localStorage.setItem("Nombre:", nombreUsuario.value);
    localStorage.setItem("Correo Electrónico:", email.value);
    localStorage.setItem("Contraseña:", contrasenia.value);
};

//Pop up que confirma el inició de sesión
function confirmarSesion(evento) {
    evento.preventDefault();

    popRegistro.textContent = "¡Usted ingresó correctamente!"
    popup.style.display = "block";

    close.addEventListener("click", () => {
        popup.style.display = "none";
    });
     
    popup.addEventListener("click", e => {
        // console.log(e);
        if (e.target.className === "popup-wrapper") {
            popup.style.display = "none";
        }});
    };


//Pop up que confirma el registro de usuario
function confirmarRegistro(evento) {
    evento.preventDefault();

    popRegistro.textContent = "¡Usted se registró correctamente!"
    popup.style.display = "block";


    close.addEventListener("click", () => {
        popup.style.display = "none";
    });
     
    popup.addEventListener("click", e => {
        // console.log(e);
        if (e.target.className === "popup-wrapper") {
            popup.style.display = "none";
        }});
    };