

class Producto {
    constructor(id, nombre, categoria, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.img = img
    }
}

let carritoID = $("#carrito");
let imprimir = $("#aca");
let total = $("#total");
let compra = $("#compra");

let productos = []
let carrito = []


let producto1 = new Producto(28, "Pizza", "muzzarella", 300, "./img/pizzaMuzzarella.jpg")
let producto2 = new Producto(38, "Pizza", "Jamon-morron", 400, "./img/pizzaJamonMorron.jpg")
let producto3 = new Producto(48, "Pizza", "Napolitana", 350, "./img/pizzaNapolitana.jpg")
let producto4 = new Producto(58, "Pizza", "Fugazzeta", 400, "./img/pizzaFugazzeta.jpg")

productos.push(producto1)
productos.push(producto2)
productos.push(producto3)
productos.push(producto4)

console.log(productos);

for (const producto of productos) {

    imprimir.append(`
<div class="card col-3" style="width: 14rem;">
<img src="${producto.img}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.categoria}</p>
    <p class="card-text"> $ ${producto.precio}</p>
    <a href="#" class="btn btn-primary" id="añadirCarrito" onclick="añadirCarrito(${producto.id})">Comprar</a>
</div>
</div>
`)
}



const añadirCarrito = (idPorOnclick) => {

    const objetoIdentificado = productos.find(e => e.id == idPorOnclick)
    console.log(objetoIdentificado);


    if (JSON.parse(localStorage.getItem("carrito")) != null) {
        let carritoNEW = JSON.parse(localStorage.getItem("carrito"))
        carritoNEW.push(objetoIdentificado)

        localStorage.setItem("carrito", JSON.stringify(carritoNEW))
        location.reload()
    } else {
        carrito.push(objetoIdentificado)
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }

}


const imprimirCarrito = () => {

    let carritoDelStorage = JSON.parse(localStorage.getItem("carrito"))

    carritoDelStorage.forEach(e => {
        $("#compra").append(`
        <tr>
      <th scope="row">1</th>
      <td>${e.nombre} </td>
      <td>${e.categoria}</td>
      <td> $ ${e.precio}</td>
    </tr>
`)
    })

}

imprimirCarrito()

const precioTotal = () => {

    let carritoDelStorage = JSON.parse(localStorage.getItem("carrito"))

    let precioTotal = 0;

    carritoDelStorage.forEach(e => {

        precioTotal = precioTotal + e.precio
    })

    total.textContent = precioTotal
}

precioTotal()
