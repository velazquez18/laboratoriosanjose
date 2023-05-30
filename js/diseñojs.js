document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.burbuja-link');
    var burbujas = document.querySelectorAll('.burbuja');
    var botonesCerrar = Array.from(document.querySelectorAll('.cerrar-burbuja'));

    function cerrarBurbujas() {
        burbujas.forEach(function (burbuja) {
            burbuja.style.display = 'none';
        });
    }

    burbujas.forEach(function (burbuja) {
        burbuja.addEventListener('click', function (event) {
            if (event.target === burbuja || botonesCerrar.includes(event.target)) {
                cerrarBurbujas();
            }
        });
    });

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            cerrarBurbujas();
            var burbujaId = link.getAttribute('data-burbuja');
            var burbuja = document.getElementById(burbujaId);
            burbuja.style.display = 'block';
        });
    });
});