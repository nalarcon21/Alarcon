document.addEventListener("DOMContentLoaded", function () {
    const icon = document.querySelector(".navbar a.icon");
    const navbar = document.querySelector(".navbar");
    const navbarLinks = document.querySelectorAll(".navbar a:not(:first-child)");

    // mostrar u ocultar el menú al hacer clic en el icono del menú
    icon.addEventListener("click", function(event) {
        event.stopPropagation(); // Evita que el evento se propague al hacer clic en el icono
        navbar.classList.toggle("responsive");
    });

    // ocultar el menú al hacer clic fuera de él
    document.addEventListener("click", function(event) {
        if (!navbar.contains(event.target) && !icon.contains(event.target)) {
            navbar.classList.remove("responsive");
        }
    });

    // ocultar el menú al hacer scroll
    window.addEventListener("scroll", function() {
        navbar.classList.remove("responsive");
    });
});

/* coursel */ 
document.addEventListener("DOMContentLoaded", function () {
    const carouselWrapper = document.querySelector(".carousel-contenedor");
    const carouselSlides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");

    let currentIndex = 1; // Empieza en 1 para evitar el primer clon
    let autoSlideInterval = setInterval(nextSlide, 5000); 

    // Clona el primer slide y lo agrega al final del carrusel
    const firstClone = carouselSlides[0].cloneNode(true);
    carouselWrapper.appendChild(firstClone);

    // Clona el último slide y lo agrega al principio del carrusel
    const lastClone = carouselSlides[carouselSlides.length - 1].cloneNode(true);
    carouselWrapper.insertBefore(lastClone, carouselSlides[0]);

    function updateCarousel() {
        carouselWrapper.style.transition = "transform 3s ease";
        carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function prevSlide() {
        currentIndex--;
        updateCarousel();
    }

    function nextSlide() {
        currentIndex++;
        updateCarousel();
    }

    // para cuando el carrusel termina la transición
    carouselWrapper.addEventListener("transitionend", function() {
        if (currentIndex <= 0) {
            currentIndex = carouselSlides.length - 2; // Salta al penúltimo slide (ignorando el último clon)
            carouselWrapper.style.transition = "none"; 
            carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        } else if (currentIndex >= carouselSlides.length - 1) {
            currentIndex = 1; // Salta al segundo slide (ignorando el primer clon)
            carouselWrapper.style.transition = "none"; 
            carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    });

    prevButton.addEventListener("click", function() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(prevSlide, 5000);
        prevSlide();
    });

    nextButton.addEventListener("click", function() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 5000);
        nextSlide();
    });

    updateCarousel();
});


/* animacion */ 

document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animated");

    // Itera sobre cada elemento animado y agrega la clase para activar la animación
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("active");
        }, index * 200);
    });
});






