

let productoActual = null;
let precioActual = null;

function openForm(producto, precio) {
  productoActual = producto;
  precioActual = precio;
  document.getElementById("formModal").style.display = "flex";
}

function closeForm() {
  document.getElementById("formModal").style.display = "none";
}

async function enviarPedido() {
  const cliente = document.getElementById("cliente").value;
  const whatsapp = document.getElementById("whatsapp").value;

  if (!cliente || !whatsapp) {
    alert("Completa los datos");
    return;
  }

  const pedido = {
    producto: productoActual,
    precio: precioActual,
    cliente,
    whatsapp,
    estado: "pendiente",
    fecha: new Date()
  };

  try {
    await addDoc(collection(db, "pedidos"), pedido);
    alert("Pedido enviado correctamente 🚀");
    closeForm();
  } catch (error) {
    alert("Error al enviar pedido");
    console.error(error);
  }
}
