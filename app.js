
/*
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



 class User {
    constructor(firstName, lastName, email, phone, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.id = id;
    }
}

let users = []

let btnSave = document.getElementById("save")
let tablePrint = document.getElementById("table")
let form = document.getElementById("form")
let btnClear = document.getElementById("clear")



//Funcion de guardar los datos
const saveData = () => {
    //e.preventDefault()

    //Datos de los input
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value

    //Actualizo mi array de usuarios local

    if (JSON.parse(localStorage.getItem("users") != null)) {

        //En el caso de el local tenga informacion
        users = JSON.parse(localStorage.getItem("users")) //actualizo con la informacion del local mi array
        let index = users.length + 1
        let user = new User(firstName, lastName, email, phone, index) //creo el usuario
        users.push(user) //lo pusheo al array
        localStorage.setItem("users", JSON.stringify(users)) //y actualizo mi local
    } else {

        //En el caso que sea NULL
        let index = 1
        let user = new User(firstName, lastName, email, phone, index) //Creo el usuario
        users.push(user) //Lo pusheo a mi array nativa que se inicializa vacia 
        localStorage.setItem("users", JSON.stringify(users)) // actualizo mi local
    }

}


//Funcion de imprimir datos
const printData = () => {

    let dataToPrint = JSON.parse(localStorage.getItem("users"))

    if (dataToPrint != null) {
        dataToPrint.forEach(e => {

            //Mi cartilla
            let table = document.createElement("tr")

            let td = document.createElement("td")
            td.setAttribute("class", "col-1")
            td.textContent = `${dataToPrint.indexOf(e)}`
            table.appendChild(td)

            let th1 = document.createElement("th")
            th1.setAttribute("class", "col-2")
            th1.textContent = `${e.firstName}`
            table.appendChild(th1)

            let th2 = document.createElement("th")
            th2.setAttribute("class", "col-2")
            th2.textContent = `${e.lastName}`
            table.appendChild(th2)

            let th3 = document.createElement("th")
            th3.setAttribute("class", "col-2")
            th3.textContent = `${e.email}`
            table.appendChild(th3)

            let th4 = document.createElement("th")
            th4.setAttribute("class", "col-2")
            th4.textContent = `${e.phone}`
            table.appendChild(th4)

            let td2 = document.createElement("td")
            td2.setAttribute("class", "col-2")
            table.appendChild(td2)

            let button = document.createElement("button")
            button.setAttribute("class", "btn btn-danger")
            button.setAttribute("id", `${e.id}`)
            button.setAttribute("onclick", `deleteUser(${e.id})`)
            button.textContent = "X"
            td2.appendChild(button)


            let button1 = document.createElement("button")
            button1.setAttribute("class", "btn btn-success")
            button1.setAttribute("id", `${e.phone}`)
            button1.setAttribute("onclick", `editUser(${e.phone})`)
            button1.textContent = "L"
            td2.appendChild(button1)


            //AGREGARLO A MI ID
            tablePrint.appendChild(table)
        })

    } else {
        document.getElementById("err").textContent = "No existe usuarios"
    }


}

const deleteUser = (id) => {

    let allUser = JSON.parse(localStorage.getItem("users"))
    let allUserAct = allUser.filter(e => e.id != id)
    localStorage.setItem("users", JSON.stringify(allUserAct))
    location.reload()

}

const editUser = (phone) => {

        let validate = confirm("¿Deseas cambiar la informacion?")

        if (validate) {
            let newName = prompt("Ingresa nuevo nombre")
            let newLN = prompt("Ingresa nuevo apellido")

            let allUsers = JSON.parse(localStorage.getItem("users"))

            let selectUser = allUsers.find(e => e.phone == phone)

            selectUser.firstName = newName
            selectUser.lastName = newLN

            let allUserAct = allUsers.filter(e => e.phone != phone)

            allUserAct.push(selectUser)
            localStorage.setItem("users", JSON.stringify(allUserAct))

            location.reload()
        }
    }

form.addEventListener("submit", saveData)
btnClear.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
})


window.addEventListener("load", () => {
    printData()
})


*/




class Producto {
    constructor(id, nombre, categoria, precio){
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }
}

let carritoID = document.getElementById("carrito")
let imprimir = document.getElementById("aca")
let total = document.getElementById("total")

let productos = []
let carrito = []


let producto1 = new Producto(28,"remera","nike",5000)
let producto2 = new Producto(38,"pantalon","adiddas",7000)
let producto3 = new Producto(48,"buzo","rebook",2000)
let producto4 = new Producto(58,"remera","adiddas",1000)
let producto5 = new Producto(68,"gorro","nike",700)
let producto6 = new Producto(78,"zapatillas","rebook",25000)


productos.push(producto1)
productos.push(producto2)
productos.push(producto3)
productos.push(producto4)
productos.push(producto5)
productos.push(producto6)

console.log(productos);


productos.forEach(e => {

imprimir.innerHTML += `
<div class="card col-4" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">${e.nombre}</h5>
    <p class="card-text">${e.categoria}  $ ${e.precio}</p>
    <a href="#" class="btn btn-primary" onclick="añadirCarrito(${e.id})">Comprar</a>
</div>
</div>
`
})



const añadirCarrito = (idPorOnclick) => {

const objetoIdentificado = productos.find(e => e.id == idPorOnclick)
console.log(objetoIdentificado);


if(JSON.parse(localStorage.getItem("carrito")) != null){
let carritoNEW = JSON.parse(localStorage.getItem("carrito"))
carritoNEW.push(objetoIdentificado)

localStorage.setItem("carrito",JSON.stringify(carritoNEW))
location.reload()
} else {
carrito.push(objetoIdentificado)
localStorage.setItem("carrito",JSON.stringify(carrito))
}

}


const imprimirCarrito = () => {

let carritoDelStorage = JSON.parse(localStorage.getItem("carrito"))

carritoDelStorage.forEach(e => {
carritoID.innerHTML += `
<div class="d-flex ">
    <p>${e.nombre} || || </p>
    <p>${e.categoria}|| ||  </p>
    <p>${e.precio}</p>
</div>
`
})

}

imprimirCarrito()

const precioTotal = () => {

let carritoDelStorage = JSON.parse(localStorage.getItem("carrito"))

let precioTotal = 0;

carritoDelStorage.forEach(e=> {

precioTotal = precioTotal + e.precio 
console.log(precioTotal);
})

total.textContent = precioTotal
}

precioTotal()





