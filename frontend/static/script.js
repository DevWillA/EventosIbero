async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const resp = await fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });

  const data = await resp.json();

  if (data.message === "Login successful") {
    document.getElementById("mensajeLogin").style.color = "green";
    document.getElementById("mensajeLogin").innerText = "¡Bienvenido!";
    document.getElementById("logi").style.display = "none";
    document.getElementById("create-event").style.display = "block";
  } else {
    document.getElementById("mensajeLogin").style.color = "red";
    document.getElementById("mensajeLogin").innerText = "Usuario o contraseña incorrectos";
  }
}
