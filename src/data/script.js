const hamburger = document.getElementById('hamburger');
const navMenuMobile = document.querySelector('.nav-menu-mobile');

// Agregar el evento de clic al ícono hamburguesa
hamburger.addEventListener('click', () => {
    // Alternar la clase "active" para mostrar/ocultar el menú
    navMenuMobile.classList.toggle('active');
});