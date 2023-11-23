$("#miFormulario").val

  function validarFormulario() {
    var nombre = $("#nombre").val;
    var email = $("#email").val();
    var mensaje = $("#mensaje").val();

    if (nombre === "" || email === "" || mensaje === "") {
      $("#mensajeError").text("Todos los campos son obligatorios");
    } else {

      $("#mensajeError").text("");
      alert("Formulario válido. ¡Enviar!");
    }
  }