

class producto {
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


let producto1 = new producto(28, "Pizza", "muzzarella", 300, "./img/pizzaMuzzarella.jpg")
let producto2 = new producto(38, "Pizza", "Jamon-morron", 400, "./img/pizzaJamonMorron.jpg")
let producto3 = new producto(48, "Pizza", "Napolitana", 350, "./img/pizzaNapolitana.jpg")
let producto4 = new producto(58, "Pizza", "Fugazzeta", 400, "./img/pizzaFugazzeta.jpg")

productos.push(producto1)
productos.push(producto2)
productos.push(producto3)
productos.push(producto4)

console.log(productos);

for (const producto of productos) {

    imprimir.append(`
<div class="card col-3" data-aos="zoom-in" style="width: 14rem;">
<img src="${producto.img}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.categoria}</p>
    <p class="card-text"> $ ${producto.precio}</p>
    <a href="#" class="btn btn-primary" id="añadirCarrito" onClick="añadirCarrito(${producto.id})">Comprar</a>
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
        location.reload()
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
      <td></td>
      <td><button type="button" class="btn btn-danger" onclick="borrarProductoCarrito(${e.id})">X</button></td>
    </tr>
`)
    })

}
imprimirCarrito()
/*
const precioTotal = () => {

    let carritoDelStorage = JSON.parse(localStorage.getItem("carrito"))

    let precioTotalCompra = 0;

    carritoDelStorage.forEach(e => {

        precioTotalCarrito = precioTotalCompra + e.precio
    })
    if (JSON.parse(localStorage.getItem("carrito"))) {
        imprimirCarrito()
    }

    $("#total").textContent = precioTotalCarrito
    precioTotal()
}
*/
const borrarProductoCarrito = (idPorOnclick) => {

    const carritoDelStorage = JSON.parse(localStorage.getItem("carrito"));

    const indexIdentificado = carritoDelStorage.findIndex(e => e.id == idPorOnclick)

    if (indexIdentificado >= 0) {
        carritoDelStorage.splice(indexIdentificado, 1)
        localStorage.setItem("carrito", JSON.stringify(carritoDelStorage))
        location.reload()
    }
}


$("#modalCarrito").on("click", () => {

    $("#modalCarrito").append(`<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div id="modal-body" class="modal-body">
        <div class="carrito" id="carrito">
        <table id="table" class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Categoria</th>
            <th scope="col">Precio</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody id="compra">
          
        </tbody>
      </table>
        </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>`)
})