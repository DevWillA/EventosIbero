async function login() {
    const resp = await fetch(
      '/auth/login?usuario=' +
        encodeURIComponent(usuario) +
        "&clave=" +
        encodeURIComponent(clave),
      { method: 'POST' }
    );
  
    const data = await resp.json();
  
    if (data.estado == "exitoso") {
      window.location.href = "eventos.html";
    } else {
      document.getElementById("mensajeLogin").innerHTML =
        "Usuario o contraseña incorrectos";
    }
  }
  