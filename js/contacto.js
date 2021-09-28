
class Persona {

  constructor({
        nombre = "",
        telefono = 0,
        pais = "",
  }) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.pais = pais;
  }
}

$("#btnEnviarMensajeContacto").on(`click`, (e) => {
  e.preventDefault()

  const usuario = new Persona ({
    nombre: $("#nombreUsuario").val(),
    telefono: $("#telefonoUsuario").val(),
    pais: $("#selectPaises").val(),
  })

  const { nombre, telefono, pais } = usuario

  $(".modal-body").append(`
  <div class="alert alert-primary" role="alert">
    Estamos preparando su pedido !!!Te hemos enviado un mensaje a ${nombre}
    con telefono: ${telefono}
  </div>`);

  $("#mensajeEnviado")[0].reset();

  localStorage.clear()
  
})
