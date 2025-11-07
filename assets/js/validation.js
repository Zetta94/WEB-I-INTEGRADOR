(function () {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const $ = s => document.querySelector(s);
    const showError = (name, msg) => {
        const el = document.querySelector(`.error[data-error-for="${name}"]`);
        const input = document.getElementById(name);
        if (el) el.textContent = msg || '';
        if (input) {
            if (msg) {
                input.classList.add('input-error');
            } else {
                input.classList.remove('input-error');
            }
        }
    };

    const emailRe = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    const phoneRe = /^\+?\d{7,15}$/;

    form.addEventListener('submit', e => {
        e.preventDefault();

        ['nombre', 'email', 'telefono', 'mensaje'].forEach(n => showError(n, ''));

        const data = {
            nombre: $('#nombre').value.trim(),
            email: $('#email').value.trim(),
            telefono: $('#telefono').value.trim(),
            mensaje: $('#mensaje').value.trim()
        };

        let ok = true;

        if (!data.nombre) { ok = false; showError('nombre', 'El nombre es obligatorio.'); }
        if (!data.email) { ok = false; showError('email', 'El correo es obligatorio.'); }
        else if (!emailRe.test(data.email)) { ok = false; showError('email', 'Ingresá un correo válido.'); }

        if (!data.telefono) { ok = false; showError('telefono', 'El teléfono es obligatorio.'); }
        else if (!phoneRe.test(data.telefono)) { ok = false; showError('telefono', 'Teléfono no válido (7 a 15 dígitos).'); }

        if (!data.mensaje) { ok = false; showError('mensaje', 'El mensaje es obligatorio.'); }

        const result = document.getElementById('submit-result');
        result.innerHTML = '';

        if (ok) {
            const card = document.createElement('article');
            card.className = 'dato';
            card.innerHTML = `
        <strong>Nombre:</strong> ${data.nombre}<br>
        <strong>Email:</strong> ${data.email}<br>
        <strong>Teléfono:</strong> ${data.telefono}<br>
        <strong>Mensaje:</strong> ${data.mensaje}
      `;
            result.appendChild(card);

            form.reset();
            alert('✅ Mensaje enviado correctamente.');
        } else {
            const alertMsg = document.createElement('p');
            alertMsg.textContent = 'Por favor, revisá los campos marcados en rojo.';
            alertMsg.style.color = '#fca5a5';
            alertMsg.style.marginTop = '10px';
            result.appendChild(alertMsg);
        }
    });
})();
