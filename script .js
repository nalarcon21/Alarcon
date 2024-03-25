document.addEventListener("DOMContentLoaded", function () {
    const $slider = document.querySelector(".carousel-contenedor");
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
$(document).ready(function() {
    const slides = $(".carousel-slide");
    const slideCount = slides.length;
    let currentIndex = 0;
    let intervalId;

    function showSlide(index) {
        slides.fadeOut(1000); // Desvanecer todas las diapositivas
        slides.eq(index).fadeIn(1000); // Mostrar la diapositiva en el índice dado
    }

    // Efecto de desvanecimiento inicial para la primera diapositiva
    slides.eq(currentIndex).fadeIn(1000);

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        intervalId = setInterval(nextSlide, 4000);
    }
    function startAutoSlideLeft() {
        intervalId = setInterval(prevSlide, 4000);
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    // Configurar los botones de control
    $(".carousel-control.next").click(function() {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    $(".carousel-control.prev").click(function() {
        prevSlide();
        stopAutoSlide();
        startAutoSlideLeft();
    });

    startAutoSlide();
});

    //para dispositivos moviles

    let startX = null;
    let currentX = null;

    // Desactivar botones en dispositivos móviles
    if (window.innerWidth < 768) {
        $btnRight.disabled = true;
        $btnLeft.disabled = true;
    }

    $slider.addEventListener("touchstart", function (event) {
        startX = event.touches[0].clientX;
    });

    $slider.addEventListener("touchmove", function (event) {
        if (!startX) {
            return;
        }

        currentX = event.touches[0].clientX;
        const diffX = startX - currentX;

        if (diffX > 0) {
        prevSlide();
        stopAutoSlide();
        startAutoSlideLeft(); // Deslizamiento hacia la izquierda
        } else {
            nextSlide();
            stopAutoSlide();
            startAutoSlide();// Deslizamiento hacia la derecha
        }

        startX = null;
        currentX = null;
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






