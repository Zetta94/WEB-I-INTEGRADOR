(function(){
const images = [
{src:'assets/img/slide1.jpg', caption:'Sala de musculación'},
{src:'assets/img/slide2.jpg', caption:'Clases grupales'},
{src:'assets/img/slide3.jpg', caption:'Área de cardio'}
];

let i = 0;
const img = document.getElementById('carousel-image');
const cap = document.getElementById('carousel-caption');
const prev = document.querySelector('.carousel .prev');
const next = document.querySelector('.carousel .next');

const render = () => {
const item = images[i];
img.src = item.src;
img.alt = item.caption;
cap.textContent = item.caption;
};

prev?.addEventListener('click', () => { i = (i - 1 + images.length) % images.length; render(); });
next?.addEventListener('click', () => { i = (i + 1) % images.length; render(); });

setInterval(() => { i = (i + 1) % images.length; render(); }, 5000);

render();
})();
