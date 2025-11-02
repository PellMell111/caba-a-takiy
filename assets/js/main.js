document.addEventListener('DOMContentLoaded', function() {
    // --- CARRUSEL DE IMÁGENES ---
    function initializeCarousel(slideshowElement) {
        const slidesContainer = slideshowElement.querySelector('.slideshow-container');
        const slides = slideshowElement.querySelectorAll('.slide');
        const prevBtn = slideshowElement.querySelector('.prev');
        const nextBtn = slideshowElement.querySelector('.next');
        
        if (!slidesContainer || !slides.length) return;

        let slideIndex = 0;
        const totalSlides = slides.length;

        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            slideIndex = (n + totalSlides) % totalSlides;
            slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
            slides[slideIndex].classList.add('active');
        }

        showSlide(0);

        if (prevBtn) prevBtn.addEventListener('click', () => showSlide(slideIndex - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => showSlide(slideIndex + 1));

        setInterval(() => showSlide(slideIndex + 1), 5000);
    }

    // Inicializar carruseles
    document.querySelectorAll('.slideshow').forEach(initializeCarousel);

    // --- CARRUSEL DE OPINIONES ---
    const opinionSlides = document.querySelectorAll('.opinion-slide');
    if (opinionSlides.length > 0) {
        let opinionIndex = 0;
        const totalOpinionSlides = opinionSlides.length;

        function showOpinionSlide(index) {
            opinionSlides.forEach(slide => slide.style.display = 'none');
            opinionIndex = (index + totalOpinionSlides) % totalOpinionSlides;
            opinionSlides[opinionIndex].style.display = 'flex';
        }

        showOpinionSlide(0);

        const opinionPrev = document.querySelector('.opinion-prev');
        const opinionNext = document.querySelector('.opinion-next');
        
        if (opinionPrev) opinionPrev.addEventListener('click', () => showOpinionSlide(opinionIndex - 1));
        if (opinionNext) opinionNext.addEventListener('click', () => showOpinionSlide(opinionIndex + 1));
    }

    // --- MENÚ MÓVIL ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navOverlay = document.getElementById('nav-overlay');
    
    if (hamburger && navLinks && navOverlay) {
        function toggleMenu() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            navOverlay.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        }
        
        hamburger.addEventListener('click', toggleMenu);
        navOverlay.addEventListener('click', toggleMenu);
        
        // Cerrar menú al hacer click en links
        navLinks.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) toggleMenu();
            });
        });
        
        // Cerrar menú al redimensionar
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});