(function () {
    const links = document.querySelectorAll('a[data-nav]');
    const here = location.pathname.split('/').pop() || 'index.html';
    links.forEach(a => {
        const file = a.getAttribute('href');
        if (file === here) { a.classList.add('active'); }
    });
})();
