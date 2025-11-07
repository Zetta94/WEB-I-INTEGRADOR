(function () {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let erroresPrevios = document.querySelectorAll(".mensaje-error");
        erroresPrevios.forEach(e => e.remove());
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
            p.className = "mensaje-error";
            p.style.color = "red";
            document.getElementById("nombre").after(p);
            valido = false;
        } else if (/\d/.test(nombre)) {
            let p = document.createElement("p");
            p.textContent = "El nombre no puede contener números.";
            p.className = "mensaje-error";
            p.style.color = "red";
            document.getElementById("nombre").after(p);
            valido = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (email === "") {
            let p = document.createElement("p");
            p.textContent = "El correo es obligatorio.";
            p.className = "mensaje-error";
            p.style.color = "red";
            document.getElementById("email").after(p);
            valido = false;
        } else if (!emailRegex.test(email)) {
            let p = document.createElement("p");
            p.textContent = "Ingresá un correo válido (ej: ejemplo@mail.com).";
            p.className = "mensaje-error";
            p.style.color = "red";
            document.getElementById("email").after(p);
            valido = false;
        }

        const telRegex = /^[0-9+\-\s]{7,20}$/;
        if (telefono === "") {
            let p = document.createElement("p");
            p.textContent = "El teléfono es obligatorio.";
            p.className = "mensaje-error";
            p.style.color = "red";
            document.getElementById("telefono").after(p);
            valido = false;
        } else if (!telRegex.test(telefono)) {
            let p = document.createElement("p");
            p.textContent = "El teléfono solo puede tener números, +, - o espacios (mínimo 7 dígitos).";
            p.className = "mensaje-error";
            p.style.color = "red";
            document.getElementById("telefono").after(p);
            valido = false;
        }

        if (mensaje === "") {
            let p = document.createElement("p");
            p.textContent = "El mensaje es obligatorio.";
            p.className = "mensaje-error";
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
            aviso.textContent = "Por favor, revisá los campos marcados en rojo.";
            aviso.style.color = "#fca5a5";
            aviso.style.marginTop = "10px";
            result.appendChild(aviso);
        }
    });
})();
