(function(){
const form = document.getElementById('contact-form');
if(!form) return;

const $ = s => document.querySelector(s);
const showError = (name, msg) => {
const el = document.querySelector(`.error[data-error-for="${name}"]`);
if(el) el.textContent = msg || '';
};

const emailRe = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
const phoneRe = /^\+?\d{7,15}$/; // acepta 7 a 15 dígitos, opcional "+"

form.addEventListener('submit', e => {
e.preventDefault();

// limpiar errores
['nombre','email','telefono'].forEach(n => showError(n, ''));

const data = {
nombre: $('#nombre').value.trim(),
email: $('#email').value.trim(),
telefono: $('#telefono').value.trim(),
mensaje: $('#mensaje')?.value.trim() || ''
};

let ok = true;

if(!data.nombre){ ok = false; showError('nombre', 'El nombre es obligatorio'); }
if(!emailRe.test(data.email)){ ok = false; showError('email', 'Ingresá un email válido'); }
if(!phoneRe.test(data.telefono)){ ok = false; showError('telefono', 'Ingresá un teléfono válido (7 a 15 dígitos)'); }

const result = document.getElementById('submit-result');
result.innerHTML = '';

if(ok){
const card = document.createElement('article');
card.className = 'card';
const h3 = document.createElement('h3');
h3.textContent = 'Datos enviados';
const ul = document.createElement('ul');

Object.entries({Nombre:data.nombre, Email:data.email, Teléfono:data.telefono, Mensaje:data.mensaje}).forEach(([k,v])=>{
const li = document.createElement('li');
li.textContent = `${k}: ${v || '—'}`;
ul.appendChild(li);
});

card.appendChild(h3);
card.appendChild(ul);
result.appendChild(card);
form.reset();
} else {
const alert = document.createElement('p');
alert.textContent = 'Revisá los campos marcados en rojo.';
alert.style.color = '#fca5a5';
result.appendChild(alert);
}
});
})();