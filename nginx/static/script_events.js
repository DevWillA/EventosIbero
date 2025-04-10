async function createEvent() {
  let nombre = document.getElementById("nombre").value;
  let fecha = document.getElementById("fecha").value;
  let lugar = document.getElementById("lugar").value;

  await fetch(
    `/events/eventos?nombre=?${encodeURIComponent(nombre)}
    &fecha=?${encodeURIComponent(fecha)}&lugar=?${encodeURIComponent(lugar)}`,
    { method: 'POST' }
  );

  cargarEventos();
}

async function editarEventos(id) {
  const nuevoNombre = document.getElementById("Nuevo nombre del evento").value;
  const nuevaFecha = document.getElementById("Nueva Fecha").value;
  const nuevoLugar = document.getElementById("Nuevo lugar del evento").value;

  await fetch(
    `/events/eventos?nombre=?${encodeURIComponent(nuevoNombre)}
        &fecha=?${encodeURIComponent(nuevaFecha)}&lugar=?${encodeURIComponent(
      nuevoLugar
    )}`,
    { method: "PUT" }
  );
  cargarEventos();
}

async function eliminarEventos(id) {
  if (confirm("¿Está seguro de que desea eliminar este evento?")) {
    await fetch(`/events/eventos/${id}`, { method: "DELETE" });
    cargarEventos();
  }
}

function logout() {
  window.location.href = "index.html";
}
async function cargarEventos() {
  const resp = await fetch("/events/eventos");
  const data = await resp.json();
  let divEventos = document.getElementById("eventos");
  divEventos.innerHTML = "";
  eventos.forEach((ev) => {
    divEventos.innerHTML += `
    <div class="evento">
    <strong>${ev.nombre}</strong><br>
        📅 ${ev.fecha} - 📍 ${ev.lugar}<br>
        <button onclick="editarEventos(${ev.id})"> 🖋️ Editar</button>
        <button onclick="eliminarEventos(${ev.id})" style="background:red;"> 🚮 Eliminar</button>
    </div>`;
  });
}

cargarEventos()