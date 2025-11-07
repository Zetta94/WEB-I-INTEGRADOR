(function () {
    const images = [
        { src: 'assets/img/0.jpg' },
        { src: 'assets/img/4.jpeg' },
        { src: 'assets/img/1.jpeg' },
    ];

    let i = 0;
    const img = document.getElementById('carousel-image');
    const cap = document.getElementById('carousel-caption');
    const prev = document.querySelector('.carousel .prev');
    const next = document.querySelector('.carousel .next');

    const render = () => {
        img.style.opacity = 0;
        setTimeout(() => {
            const item = images[i];
            img.src = item.src;
            img.style.opacity = 1;
        }, 400);
    };

    prev?.addEventListener('click', () => {
        i = (i - 1 + images.length) % images.length;
        render();
    });

    next?.addEventListener('click', () => {
        i = (i + 1) % images.length;
        render();
    });

    setInterval(() => {
        i = (i + 1) % images.length;
        render();
    }, 5000);

    render();
})();
