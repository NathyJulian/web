document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scroll-to-top');

    scrollToTopButton.addEventListener('click', (event) => {
        event.preventDefault(); 

        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.ul-nav-link a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); 

            const sectionId = this.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0; // Guarda la última posición de desplazamiento
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Ocultar la barra de navegación al desplazarse hacia abajo
            navbar.style.top = '-80px'; // Ajusta este valor según la altura de la barra
        } else {
            // Mostrar la barra de navegación al desplazarse hacia arriba
            navbar.style.top = '0';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
    });
});