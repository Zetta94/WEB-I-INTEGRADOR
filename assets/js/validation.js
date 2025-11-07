(function () {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let errores = document.querySelectorAll(".error");
        errores.forEach(err => err.textContent = "");
        const result = document.getElementById("submit-result");
        result.innerHTML = "";

        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        let valido = true;

        if (nombre === "") {
            let p = document.createElement("p");
            p.textContent = "El nombre es obligatorio.";
            p.style.color = "red";
            document.getElementById("nombre").after(p);
            valido = false;
        }

        if (email === "") {
            let p = document.createElement("p");
            p.textContent = "El correo es obligatorio.";
            p.style.color = "red";
            document.getElementById("email").after(p);
            valido = false;
        }

        if (telefono === "") {
            let p = document.createElement("p");
            p.textContent = "El teléfono es obligatorio.";
            p.style.color = "red";
            document.getElementById("telefono").after(p);
            valido = false;
        }

        if (mensaje === "") {
            let p = document.createElement("p");
            p.textContent = "El mensaje es obligatorio.";
            p.style.color = "red";
            document.getElementById("mensaje").after(p);
            valido = false;
        }

        if (valido) {
            let card = document.createElement("div");
            card.className = "dato";
            card.innerHTML =
                "<strong>Nombre:</strong> " + nombre + "<br>" +
                "<strong>Email:</strong> " + email + "<br>" +
                "<strong>Teléfono:</strong> " + telefono + "<br>" +
                "<strong>Mensaje:</strong> " + mensaje;

            result.appendChild(card);
            form.reset();
            alert("✅ Mensaje enviado correctamente.");
        } else {
            let aviso = document.createElement("p");
            aviso.textContent = "Por favor, completá todos los campos.";
            aviso.style.color = "#fca5a5";
            aviso.style.marginTop = "10px";
            result.appendChild(aviso);
        }
    });
})();
