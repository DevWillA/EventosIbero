async function login() {
  const resp = await fetch(
    "/auth/login?usuario =" +
      encodeURIComponent(username) +
      "&password=" +
      encodeURIComponent(password),
    { method: "POST" }
  );
}

const data = await resp.json();
if (data.estado == "exitoso") {
  window.location.href = "events.html";
} else {
  document.getElementById("mensajeLogin").innerHTML =
    "Usuario o contraseña incorrectos";
}
