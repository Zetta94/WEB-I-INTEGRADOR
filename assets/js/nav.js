(function () {
    let enlaces = document.querySelectorAll("a[data-nav]");
    let pagina = window.location.pathname.split("/").pop();

    if (pagina === "") {
        pagina = "index.html";
    }

    for (let i = 0; i < enlaces.length; i++) {
        let enlace = enlaces[i];
        if (enlace.getAttribute("href") === pagina) {
            enlace.classList.add("active");
        }
    }
})();
