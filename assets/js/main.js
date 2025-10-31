document.addEventListener('DOMContentLoaded', function() {
    // --- CARRUSEL DE IMÁGENES CON SLIDE HORIZONTAL ---
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const slidesContainer = document.querySelector('.slideshow-container');
    const totalSlides = slides.length;

    function showSlide(n) {
        // Remover clase active de todos los slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Actualizar índice
        slideIndex = (n + totalSlides) % totalSlides;
        
        // Mover el contenedor y activar el slide actual
        slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
        slides[slideIndex].classList.add('active');
    }

    // Mostrar la primera imagen al cargar
    showSlide(0);

    // Asignar eventos a los botones de navegación del carrusel de imágenes
    document.querySelector('.prev').addEventListener('click', () => {
        showSlide(slideIndex - 1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        showSlide(slideIndex + 1);
    });

    // Avance automático
    setInterval(() => {
        showSlide(slideIndex + 1);
    }, 5000);

    // --- CARRUSEL DE OPINIONES ---
    let opinionIndex = 0;
    const opinionSlides = document.querySelectorAll('.opinion-slide');
    const totalOpinionSlides = opinionSlides.length;

    function showOpinionSlide(index) {
        opinionSlides.forEach(slide => {
            slide.style.display = 'none';
        });
        opinionIndex = (index + totalOpinionSlides) % totalOpinionSlides;
        opinionSlides[opinionIndex].style.display = 'flex';
    }

    showOpinionSlide(0);

    document.querySelector('.opinion-prev').addEventListener('click', () => {
        showOpinionSlide(opinionIndex - 1);
    });

    document.querySelector('.opinion-next').addEventListener('click', () => {
        showOpinionSlide(opinionIndex + 1);
    });

    // --- MENÚ MÓVIL ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navOverlay = document.getElementById('nav-overlay');
    
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }
    
    hamburger.addEventListener('click', toggleMenu);
    
    // Cerrar menú al hacer click en overlay
    navOverlay.addEventListener('click', toggleMenu);
    
    // Cerrar menú al hacer click en un link
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });
    
    // Cerrar menú al redimensionar la ventana a desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});