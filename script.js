document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// OCULTAR INDICADOR DE SCROLL AL HACER SCROLL
// ==========================================

const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
    } else {
        scrollIndicator.style.opacity = '1';
    }
});

// ==========================================
// EFECTO PARALLAX EN LA IMAGEN DE FONDO (opcional)
// ==========================================

const bodiesBackground = document.querySelector('.bodies-background img');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const winxHeight = document.querySelector('.winx-section').offsetHeight;
    
    if (scrolled < winxHeight) {
        bodiesBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ==========================================
// MENSAJE EN CONSOLA
// ==========================================

console.log('🎮 Sitio Winx Club cargado correctamente');
console.log('📍 Áreas clickeables activas');