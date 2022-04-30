
 //EMPIEZO A CARGAR EL CATALOGO, LUEGO DESDE LINEA  34 LAS PREGUNTAS AL USUARIO
//Cuando termine el curso aprender Unit testing
class equipo {
    constructor(nombre,precio,origen) {
        this.nombre = nombre;
        this.precio = precio;
        this.origen = origen;
    }
}

let listaEquipos = [];

const agregarEquipo = () => {
    let nombre = prompt("Si quiere agregar un producto al catálogo ingrese el nombre del Equipo");
        while(nombre == null || nombre == ""){
            nombre = prompt("Ingreso un dato incorrecto, por favor ingrese el nombre del equipo"); 
        }
        
    let precio = parseFloat(prompt("Cual es el precio?")); 
    let origen = prompt("Cual es el origen?");
    let nuevo = new equipo(nombre,precio,origen);
    listaEquipos.push(nuevo);
}
agregarEquipo();

console.log(listaEquipos);
    if (confirm("Para agregar otro artículo haga click en Aceptar, caso contrario, en Cancelar.")) {
        agregarEquipo();
    }else{
        alert("Comprendido, sigamos");
    }

listaEquipos.push(new equipo("api", 20, "USA"));
listaEquipos.push(new equipo("neve", 40, "UK"));
listaEquipos.push(new equipo("ssl-e", 30, "USA"));
listaEquipos.push(new equipo("ssl-g", 50, "UK"));
listaEquipos.push(new equipo("trident", 60, "USA"));
listaEquipos.push(new equipo("telefunken", 70, "UK"));
listaEquipos.push(new equipo("api-2500", 25, "USA"));
listaEquipos.push(new equipo("tape", 35, "UK"));
listaEquipos.push(new equipo("pro-reverb", 90, "USA"));
listaEquipos.push(new equipo("triode-609", 99, "UK"));
listaEquipos.push(new equipo("g-comp", 26, "USA"));
listaEquipos.push(new equipo("vari-mu", 28, "UK"));



// map de nombre para actualizar precio
const actualizado = listaEquipos.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 0.9
    }
})
alert("se hace realizado un descuento del 10% a todo mediante el uso de map");
console.log(actualizado);

// filtro de precios menores a lo que ingrese el usuario
let buscarBaratos = parseInt(prompt("Ingrese el precio máximo que desea buscar"));
const baratos = listaEquipos.filter(equipo => equipo.precio < buscarBaratos); 
console.log(baratos);

// busqueda de producto individual
let busqueda = prompt("Ingrese el nombre del equipo que desea buscar");
const existe = listaEquipos.some(equipo => equipo.nombre === busqueda);
if(existe){
    alert("El producto " + busqueda + " existe");
    }else{
    alert("El producto " + busqueda + " no existe"); }

alert("Ahora seleccionaremos los productos que usted desea comprar");
//--------------EMPIEZAN LAS PREGUNTAS AL USUARIO------------------------


let tuPrecio = parseInt(prompt("Cual es el precio del producto que obtendrás con descuento?"));
    while (tuPrecio < 0 || isNaN(tuPrecio))   { 
        tuPrecio = parseInt(prompt("No ingresaste ningun número. Escribe el precio del producto que obtendrás con descuento?"));
    }

let tuDescuento = parseInt(prompt("Cual es el porcentaje de descuento del producto?"));
    while (tuDescuento < 0 || isNaN(tuDescuento))    { 
        tuDescuento = parseInt(prompt("No ingresaste ningun número. Escribe el porcentaje de descuento del producto?"));
    }

function valorProducto(precio, descuento){
    return precio - (precio * descuento / 100);
}

let valorVenta = valorProducto(tuPrecio, tuDescuento);
alert(`El precio total con descuento es de USD ${valorVenta}.-`);

//segunda parte

alert("Ahora puede sumar dos productos mas sin descuento."); 

let precio2 = parseInt(prompt("Cuanto cuesta el que quieres agregar?"));
    while (precio2 < 0 || isNaN(precio2))    { 
        precio2 = parseInt(prompt("No ingresaste ningun número. Cuanto cuesta el que quieres agregar?"));
    }

let precio3 = parseInt(prompt("Cuanto cuesta el siguiente que quieres?"));
    while (precio3 < 0 || isNaN(precio3))    { 
        precio3 = parseInt(prompt("No ingresaste ningun número. Cuanto cuesta el siguiente que quieres?"));
    }

function sumaDos(precio2, precio3){
    return  precio2 + (precio3);
}

let valorxtra = sumaDos(precio2, precio3);
alert(`El precio de estos dos es de USD ${valorxtra}.-`);


function totalsinIva(valorVenta, valorxtra){
    return totalsinIva = valorVenta + valorxtra;
}

alert("Ahora sumaremos el IVA de 21% al precio total");
let totalFinalConIva = totalsinIva(valorVenta, valorxtra) * 1.21;


alert(`El precio total con IVA es de USD ${totalFinalConIva}.-`);

console.log(`El precio total con IVA es de USD ${totalFinalConIva}.-`);
confirm("Confirme su compra clickeando en Aceptar, caso contrario, en Cancelar.");


//////Primeros pasos en DOM///////////
let shoppingLogo = document.querySelector("#shoppingLogo");
console.log(shoppingLogo.innerHTML);

let marketApi = document.getElementById("marketApi");
console.log(marketApi.innerHTML);
// modifico un boton que dice Agregar al carrito a Agregar otro mas .
marketApi.innerText = "Agregar otro";
console.log( marketApi.innerText ) ;
    

let marketSsle = document.querySelector("#marketSsl-e");
console.log(marketSsle.innerHTML);

let botonAddCart = document.getElementsByClassName("botonAdd");
console.log(botonAddCart[0].innerHTML);
console.log(botonAddCart[1].innerHTML);

let textoDeBuy = document.getElementsByClassName("textoDeBuy");

for (const buyers of textoDeBuy) {
    console.log(buyers.innerText);
}

//creo nodos:

//agregar elementos - createElement
/* let masTexto = document.createElement("div");
masTexto.innerHTML = "<h5>Últimas unidades! </h5>";
document.getElementsByClassName("textoDeBuy")[0].appendChild(masTexto);
console.log(masTexto); */


///LOS EVENTOS ESTAN EN FORMULARIO.JS  :D
