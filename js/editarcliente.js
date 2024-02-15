import { obtenerCliente, editarCliente } from "./API.js";
import { validar } from "./funciones.js";
const campoNombre = document.querySelector("#nombre");
const campoCorreo = document.querySelector("#email");
const campoTelefono = document.querySelector("#telefono");
const campoEmpresa = document.querySelector("#empresa");
const campoId = document.querySelector("#id");

(function () {
  document.addEventListener("DOMContentLoaded", async () => {
    /*Cómo buscar el parametro de ID de Cliente en el formulario (una vez que ya se
      accedió a la pagina de Editar Cliente.) El parametro buscado (id) tiene que ser extraido de
      la URL de la pagina actual.*/
    const parametrosURL = new URLSearchParams(window.location.search);

    const idCliente = parametrosURL.get("id");

    const cliente = await obtenerCliente(idCliente);

    traerCliente(cliente);

    //submit al formulario
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", validarCliente);
  });

  function traerCliente(cliente) {
    const { nombre, email, telefono, empresa, id } = cliente;

    campoNombre.value = nombre;
    campoCorreo.value = email;
    campoTelefono.value = telefono;
    campoEmpresa.value = empresa;
    campoId.value = id;
  }

  function validarCliente(e) {
    e.preventDefault();
    const cliente = {
      nombre: campoNombre.value,
      email: campoCorreo.value,
      telefono: campoTelefono.value,
      empresa: campoEmpresa.value,
      id: campoId.value,
    };

    if (validar(cliente)) {
      //Mostrar mensaje
      mostrarAlerta("Todos los campos son obligatorios");
      return;
    }
    editarCliente(cliente);
  }
})();
