// Configuración de Tailwind CSS
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                light: {
                    bg: '#f8f9fa',          // Fondo principal blanco roto
                    surface: '#ffffff',     // Tarjetas e inputs
                    subtle: '#f1f3f5',      // Gris muy claro para bordes/fondos
                    border: '#e9ecef',      // Gris para divisores
                    textDark: '#1a1a1a',    // Texto principal
                    textMuted: '#6c757d',  // Texto secundario
                    slate: '#343a40',       // Acentos oscuros suaves
                }
            }
        }
    }
};

// Funciones globales para la Ventana Modal de Proyectos
function openModal(title, description) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    if (modal && modalTitle && modalDescription) {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

window.openModal = openModal;
window.closeModal = closeModal;

// Inicialización e interactividad al cargar el DOM
document.addEventListener("DOMContentLoaded", function() {
    // 0. Habilitar clase de preparación para animaciones en JS
    document.body.classList.add('js-ready');

    // Inicializar iconos Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 1. Indicador Delgado de Progreso de Lectura en la Parte Superior
    const progressBar = document.getElementById('readingProgress');
    function updateProgressBar() {
        if (!progressBar) return;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
        }
    }
    window.addEventListener('scroll', updateProgressBar, { passive: true });
    updateProgressBar();

    // 2. Intersection Observer para scroll-reveal (ejecución única)
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Dejar de observar una vez activada la animación
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-element, .timeline-line');
    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Resaltado de Sección Activa en el Menú de Navegación
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

    const sectionObserverOptions = {
        root: null,
        rootMargin: '-20% 0px -45% 0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === '#' + currentId) {
                        link.classList.add('active-nav');
                    } else {
                        link.classList.remove('active-nav');
                    }
                });
            }
        });
    }, sectionObserverOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // 4. Parallax Sutil en Elementos Decorativos de la Sección Hero
    const portraitCircle = document.querySelector('.portrait-circle');
    const portraitGrid = document.querySelector('.portrait-grid');
    const crossOne = document.querySelector('.cross-one');
    const crossTwo = document.querySelector('.cross-two');
    const heroSection = document.querySelector('.hero-section');

    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    if (heroSection && window.innerWidth > 768) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            mouseX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
            mouseY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        });

        function animateParallax() {
            targetX += (mouseX - targetX) * 0.05;
            targetY += (mouseY - targetY) * 0.05;

            if (portraitCircle) {
                portraitCircle.style.transform = `translate(calc(-50% + ${targetX * 6}px), calc(-50% + ${targetY * 6}px))`;
            }
            if (portraitGrid) {
                portraitGrid.style.transform = `translate(${targetX * -4}px, ${targetY * -4}px)`;
            }
            if (crossOne) {
                crossOne.style.transform = `translate(${targetX * 8}px, ${targetY * 8}px)`;
            }
            if (crossTwo) {
                crossTwo.style.transform = `translate(${targetX * -8}px, ${targetY * -8}px)`;
            }

            requestAnimationFrame(animateParallax);
        }

        // Ejecutar parallax únicamente si el usuario no solicita reducción de movimiento
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            animateParallax();
        }
    }

    // 5. Control del Menú Móvil
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });
    }

    if (mobileLinks && mobileMenu) {
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });
    }

    // 6. Cerrar Modal al hacer clic fuera del contenido
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // 7. Actualización automática del año en el footer
    const currentYearEl = document.getElementById("current-year");
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
});

