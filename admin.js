function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email === "admin@demo.com" && pass === "1234") {
    document.getElementById("login").style.display = "none";
    document.getElementById("panel").style.display = "block";

    cargarPedidos();
  } else {
    alert("Credenciales incorrectas");
  }
}

function cargarPedidos() {
  // Simulación (luego vendrá Firebase)
  const pedidos = [
    { producto: "Camiseta Negra", cliente: "Ana", estado: "pendiente" },
    { producto: "Jeans Azul", cliente: "Carlos", estado: "pendiente" }
  ];

  const ul = document.getElementById("pedidos");
  ul.innerHTML = "";

  pedidos.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.producto} - ${p.cliente} (${p.estado})`;
    ul.appendChild(li);
  });
}
