document.addEventListener("DOMContentLoaded", () => {

let tratandoJson = [];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

//agrego un OPERADOR TERNARIO OR que recupera el último estado del carrito
const carritoHay = JSON.parse(localStorage.getItem('carrito')) || []
console.log(carritoHay);

const agregarItem = (idProducto) => {
    let producto = tratandoJson.find(producto => producto.id == idProducto);
    if (carrito.findIndex(producto => producto.id == idProducto) == -1) {
        producto.cantidad = 1;
        carrito.push(producto);
    } else{
        carrito.map((producto) => {
            if (producto.id == idProducto) {
                producto.cantidad++;
            }
        })
    };
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCantidadCarrito();
}

function cargarJson(){
    fetch("./productos.json")
    .then(resp => resp.json())
    .then((data) => {
       tratandoJson = data;
       renderizarProductos(tratandoJson);
       darAccionABotones();
    });
}
cargarJson();

const renderizarProductos = (array) => {
    console.log(array);
    let seccion = document.getElementById("renderProds");
    for (const prod of array){
    seccion.innerHTML += `
    <section class="buyApi">
        <h3 class="titleBuy">${prod.titulo}</h3>
        <div class="${prod.clase}"></div>
        <p class="textoDeBuy"> ${prod.descrip} </p>
        <p class="price"> Price: USD ${prod.precio}.-</p>
        <input type="button" value="Agregar a carrito" class="botonAdd" id="botonAdd${prod.id}"/>
        </section>
        `
    }
}
function darAccionABotones(){
    for (const prod of tratandoJson) {
        document.getElementById("botonAdd"+prod.id).addEventListener("click", function () {
            agregarItem(prod.id);
        })
    }
}
const actualizarCantidadCarrito = () => {
    let cantidad = 0;
    for (const prod of carrito){
        cantidad += prod.cantidad;
    }
    document.getElementById("contadorId").innerHTML = cantidad;
}
    actualizarCantidadCarrito();
});

//filtrar por origen UK USA//////////////

//generar un objet con la busqueda 
const datosBusqueda = {
    origen : '',
}

let buscando = document.getElementById("selectContainer");

buscando.addEventListener('change', e => {
    datosBusqueda.origen = e.target.value;
    filtrarOrigen();
});

function filtrarAccion(ukUsa){
    const { origen } = datosBusqueda;
    if ( origen ){
        return ukUsa.origen === origen;
    }
    return ukUsa;
}

function filtrarOrigen(){
    limpiarHTML();
    const resultado = autos.filter(filtrarAccion);
    if (resultado.length){
    mostrarAutos(resultado);
    } 
}