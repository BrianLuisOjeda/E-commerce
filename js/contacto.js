
class Persona {

  constructor(email, telefono, comentario, pais){
    this.email = email;
    this.telefono = telefono;
    this.comentario = comentario;
    this.pais = pais
  }
}

const imprimirDatos = () => {

  const user = new Persona(
    $("#emailUsuario").val(),
    $("#telefonoUsuario").val(),
    $("#comentarioUsuario").val(),
    $("#selectPaises").val()
  )
  console.log(user);
}

$("#btnEnviarMensajeContacto").on(`click`, () => {

  imprimirDatos()
  $("#mensajeEnviado")[0].reset();

  $(".modal-body").append(`
  <div class="alert alert-primary" role="alert">
    Estamos preparando su pedido!!!En breve nos contactaremos con vos!!!!
  </div>`)


    
})

