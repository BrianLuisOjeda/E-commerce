

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
let producto5 = new producto(68, "Pizza", "Cuatro quesos", 450, "./img/pizza-4-quesos.jpg")
let producto6 = new producto(78, "Pizza", "Pepperoni", 450, "./img/pizzaPepperoni.jpg")
let producto7 = new producto(88, "Pizza", "Hawaiana", 400, "./img/pizzaHawaiana.jpg")
let producto8 = new producto(98, "Pizza", "Margarita", 300, "./img/pizzaMargarita.jpg")


productos.push(producto1)
productos.push(producto2)
productos.push(producto3)
productos.push(producto4)
productos.push(producto5)
productos.push(producto6)
productos.push(producto7)
productos.push(producto8)


console.log(productos);

for (const producto of productos) {

  imprimir.append(`
<div class="card col-3" data-aos="zoom-in" style="width: 14rem;">
<img src="${producto.img}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.categoria}</p>
    <p class="card-text"> $ ${producto.precio}</p>
    <a href="#" class="btn btn-success" id="añadirCarrito" onClick="añadirCarrito(${producto.id})"><i class="bi bi-cart-plus-fill"></i></a>
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
        <tr class="selectorAnimado">
      <th scope="row">1</th>
      <td><img src="${e.img}" class="img-thumbnail" alt="imagenDelProducto"></td>
      <td>${e.nombre} </td>
      <td>${e.categoria}</td>
      <td> $ ${e.precio}</td>
      <td id="Total"> </td>
      <td><button type="button" id="borrarProducto" class="btn btn-danger btnBorrar"  onclick="borrarProductoCarrito(${e.id})">X</button></td>
    </tr>
`)
  })

}
imprimirCarrito()


const borrarProductoCarrito = (idPorOnclick) => {

  
  const carritoDelStorage = JSON.parse(localStorage.getItem("carrito"));

  const indexIdentificado = carritoDelStorage.findIndex(e => e.id == idPorOnclick)

  if (indexIdentificado >= 0) {
    carritoDelStorage.splice(indexIdentificado, 1)
    localStorage.setItem("carrito", JSON.stringify(carritoDelStorage))
    location.reload()
  }
  
}
borrarProductoCarrito()


$("#modalCarrito").on("click", () => {

  $('html, body').animate({
    scrollTop: $("#carrito").offset().top
  }, 2000);

})

const precioTotal = () => {

  let carritoDelStorage = JSON.parse(localStorage.getItem("carrito"))

  let precioTotal = 0;

  carritoDelStorage.forEach(e=> {

      precioTotal = precioTotal + e.precio 
      console.log(precioTotal);
  })

  $("#Total").append(`${precioTotal}`)
  total.textContent =  precioTotal;
}

precioTotal()