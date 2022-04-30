
// EVENTO PARA FORMULARIO DE CONTACTOS

const boton = document.querySelector(".inHome");

boton.addEventListener("mouseover",()=>{
    alert("Por redes contestaré mas rápido!")});



const nombreYapellido = document.querySelector("#nombreYap");

nombreYapellido.onchange = ()=>{}
nombreYapellido.addEventListener("change",()=>{
console.log(nombreYapellido.value);
})

const correoUsuario = document.querySelector("#correo");
correoUsuario.onchange = ()=>{}
correoUsuario.addEventListener("change",()=>{
console.log(correo.value);
})

const celUsuario = document.querySelector("#telefono");
celUsuario.onchange = ()=>{}
celUsuario.addEventListener("change",()=>{
console.log(celUsuario.value);
})

const texto = document.querySelector("#textodeUsuario");
texto.onchange = ()=>{}
 texto.addEventListener("change",()=>{
     console.log(texto.value);
 })


let miFormulario = document.getElementById("formAsubir");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado")
    alert("El formulario se ha enviado correctamente");    
}





