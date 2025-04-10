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
  
    const mensajeLogin = document.getElementById("mensajeLogin");
  
    if (data.message === "Login successful") {
      mensajeLogin.style.color = "green";
      mensajeLogin.innerText = "¡Bienvenido!";
      document.getElementById("logi").style.display = "none";
      document.getElementById("create-event").style.display = "block";
    } else {
      mensajeLogin.style.color = "red";
      mensajeLogin.innerText = "Usuario o contraseña incorrectos";
    }
  }
  
  async function createEvent() {
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const lugar = document.getElementById("lugar").value;
  
    const resp = await fetch("http://localhost:8001/eventos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nombre, fecha, lugar })
    });
  
    const data = await resp.json();
    const mensajeEvento = document.getElementById("mensajeEvento");
  
    if (data.message === "Evento creado correctamente") {
      mensajeEvento.style.color = "green";
      mensajeEvento.innerText = "Evento creado correctamente";
    } else {
      mensajeEvento.style.color = "red";
      mensajeEvento.innerText = "Hubo un error al crear el evento";
    }
  }
  