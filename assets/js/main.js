document.addEventListener('DOMContentLoaded', function() {
    // --- CARRUSEL DE IMÁGENES ---
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(n) {
        slides.forEach(slide => slide.style.display = 'none');
        
        slideIndex = (n + totalSlides) % totalSlides;
        slides[slideIndex].style.display = 'block';
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
});