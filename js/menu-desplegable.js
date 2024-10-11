document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay');
    const check = document.getElementById('check');
    const navMenu = document.querySelector('.nav-content ul');
    const body = document.body;
    const closer = document.querySelector('.ul-closer');

    // Mostrar el menú y el overlay al marcar el checkbox
    check.addEventListener('change', () => {
        if (check.checked) {
            navMenu.classList.add('show');
            overlay.style.opacity = '1';
            overlay.style.visibility = 'visible';
            body.classList.add('menu-open'); // Bloquear el desplazamiento
        } else {
            navMenu.classList.remove('show');
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
            body.classList.remove('menu-open'); // Habilitar el desplazamiento
        }
    });

    // Cerrar el menú y el overlay al hacer clic en el overlay
    overlay.addEventListener('click', () => {
        check.checked = false;
        navMenu.classList.remove('show');
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        body.classList.remove('menu-open'); // Habilitar el desplazamiento
    });

    // Cerrar el menú al hacer clic fuera del menú
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !check.contains(event.target) && !overlay.contains(event.target) && !closer.contains(event.target)) {
            check.checked = false;
            navMenu.classList.remove('show');
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
            body.classList.remove('menu-open'); // Habilitar el desplazamiento
        }
    });

    // Cerrar el menú al hacer clic en el span con la clase 'closer'
    closer.addEventListener('click', () => {
        check.checked = false;
        navMenu.classList.remove('show');
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        body.classList.remove('menu-open'); // Habilitar el desplazamiento
    });

    // Cerrar el menú al hacer clic en uno de los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-content ul a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            check.checked = false;
            navMenu.classList.remove('show');
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
            body.classList.remove('menu-open'); // Habilitar el desplazamiento
        });
    });
});