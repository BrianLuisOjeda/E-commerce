

class producto {

    constructor(titulo, categoria, precio, disp) {

        this.titulo = titulo;
        this.categoria = categoria;
        this.precio = precio;
        this.disp = disp
    }
}

const productos = []

const producto1 = new producto("remera", "nike", 2000, true)
const producto2 = new producto("pantalon", "nike", 3000, true)
const producto3 = new producto("campera", "nike", 4000, true)
const producto4 = new producto("remera", "nike", 1500, true)
const producto5 = new producto("gorra", "nike", 1000, true)
const producto6 = new producto("zapatillas", "nike", 20000, true)



productos.push(producto1)
productos.push(producto2)
productos.push(producto3)
productos.push(producto4)
productos.push(producto5)
productos.push(producto6)


//console.log(productos)


let selector1 = document.getElementById("cardsProductos");


productos.forEach(e => {

    let div1 = document.createElement("div")
    div1.setAttribute("class", "contenedor__Card")

    let p1 = document.createElement("p")
    p1.textContent = e.titulo
    p1.setAttribute("class", "titulo__Card")

    let p2 = document.createElement("p")
    p2.textContent = e.categoria

    let p3 = document.createElement("p")
    p3.textContent = e.precio

    div1.appendChild(p1)
    div1.appendChild(p2)
    div1.appendChild(p3)

    selector1.appendChild(div1)


})




