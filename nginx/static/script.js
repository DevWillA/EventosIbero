async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch(`http://127.0.0.1:8000/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`, {
            method: "POST"
        });

        const data = await response.json();

        if (data.message === "Login successful") {
            window.location.href = "events.html";
        } else {
            document.getElementById("mensajeLogin").innerText = "Usuario o contraseña incorrectos";
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("mensajeLogin").innerText = "Error al conectar con el servidor.";
    }
}
