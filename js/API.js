const url = "http://localhost:4000/clientes";

//?CUANDO SE CREA NUEVO CLIENTE
export const nuevoCliente = async (cliente) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

//?OBTENER TODOS LOS CLIENTES
export const obtenerClientes = async () => {
  try {
    const resultado = await fetch(url);
    const clientes = await resultado.json();
    return clientes;
  } catch (error) {
    console.log(error);
  }
};

//?ELIMINA UN CLIENTE
export const eliminarCliente = async (id) => {
  try {
    await fetch(`${url}/${id}`, { method: "DELETE" });
  } catch (error) {
    console.log(error);
  }
};

//?OBTENER UN CLIENTE
export const obtenerCliente = async (id) => {
  try {
    const resultado = await fetch(`${url}/${id}`);
    const cliente = await resultado.json();
    return cliente;
  } catch (error) {
    console.log(error);
  }
};

//?EDITAR UN CLIENTE
export const editarCliente = async (cliente) => {
  try {
    await fetch(`${url}/${cliente.id}`, {
      method: "PUT",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};
