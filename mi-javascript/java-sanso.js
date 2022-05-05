document.addEventListener("DOMContentLoaded", () => {
let productos = [
    {
    id: "1",
    precio: "40",
    origen: "USA",
    clase: "fotoDeApi",
    descrip: "Channel Strip clásico americano.",
    titulo: "API"
    },
    {
    id: "2",
    precio: "50",
    origen: "UK",
    clase: "fotoDeNeve",
    descrip: "Channel Strip clásico britanico.",
    titulo: "NEVE"
    },
    {
    id: "3",
    precio: "55",
    origen: "UK",
    clase: "fotoDeSsl-e",
    descrip: "Channel Strip clásico britanico Rockero.",
    titulo: "SSL-E"
    },
    {
    id: "4",
    precio: "57",
    origen: "UK",
    clase: "fotoDeSsl-g",
    descrip: "Channel Strip clásico britanico moderno.",
    titulo: "SSL-G"
    },
    {
    id: "5",
    precio: "60",
    origen: "UK",
    clase: "fotoDeTrident",
    descrip: "Channel Strip clásico de Master of Puppets",
    titulo: "TRIDENT"
    },
    {
    id: "6",
    precio: "55",
    origen: "UK",
    clase: "fotoDeTelefunken",
    descrip: "Strip clasico británico de sonido Beatle. ",
    titulo: "TELEFUNKEN"
    },
    {
    id: "7",
    precio: "49",
    origen: "USA",
    clase: "fotoDeApi-2500",
    descrip: "Compressor vca transparente y punchy.",
    titulo: "API-2500"
    },
    {
    id: "8",
    precio: "60",
    origen: "UK",
    clase: "fotoDeTape",
    descrip: "Cinta análogica tipo sony Studer.",
    titulo: "TAPE"
    },
    {
    id: "9",
    precio: "61",
    origen: "USA",
    clase: "fotoDeReverb",
    descrip: "Angelical Reverb, soft y transparente HQ.",
    titulo: "PRO-REVERB"
    },
    {
    id: "10",
    precio: "63",
    origen: "UK",
    clase: "fotoDeTriode-609",
    descrip: "Compressor VCA creamy y depth. ",
    titulo: "TRIODE-609"
    },
    {
    id: "11",
    precio: "65",
    origen: "UK",
    clase: "fotoDeG-comp",
    descrip: "Compressor vca rocky and punchy.",
    titulo: "G-COMP"
    },
    {
    id: "12",
    precio: "48",
    origen: "USA",
    clase: "fotoDeVari-mu",
    descrip: "Compressor vari-mu soft, vintage, creamy. ",
    titulo: "VARI-MU"
    }
]

/* const botoncomprar = document.getElementById("botonAdd1");
botoncomprar.addEventListener("click", function () {
    agregarItem(1);
}) */
/* for (const prod of productos){
    document.getElementById("botonAdd"+prod.id).addEventListener("click", function () {
        agregarItem(prod.id);
    })
} */

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

//////////////////////////////////////////////////////////////////////////
//agrego un OPERADOR TERNARIO
carrito.length === 0 && console.log("El carrito está vacío!")

//agrego un OPERADOR TERNARIO OR que recupera el último estado del carrito
const carritoHay = JSON.parse(localStorage.getItem('carrito')) || []
console.log(carritoHay);

//agrego DESESTRUCTURACION del carrito
const [titulo, precio] = carrito;
console.log(titulo);
console.log(precio);

//agrego SPRED del carrito

// lista todas las propiedades y valores de usuario1 dentro de otro objeto
const listaPracticar = {
    ...productos[0],
}

console.log(listaPracticar);

const listaPracticar2 = {
    ...productos[0],
    id: "30",
    titulo: "MONSTER"
}

console.log(listaPracticar2);

//////////////////////////////////////////////////////////////////////////////////


const agregarItem = (idProducto) => {
    let producto = productos.find(producto => producto.id == idProducto);
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
/*     alert("Item agregado al carrito"); */
}


const renderizarProductos = () => {
    let seccion = document.getElementById("renderProds");
    for (const prod of productos){
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
renderizarProductos();
for (const prod of productos) {
    document.getElementById("botonAdd"+prod.id).addEventListener("click", function () {
        agregarItem(prod.id);
        })
    }


/* const productos = JSON.parse(localStorage.getItem("carrito")); */

const actualizarCantidadCarrito = () => {
    let cantidad = 0;
    for (const prod of carrito){
        cantidad += prod.cantidad;
    }
document.getElementById("contadorId").innerHTML = cantidad;
}
actualizarCantidadCarrito();

})

//resetear carrito