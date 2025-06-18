const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;
let interval;

// Exibir slide atual
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

// Próximo slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Slide anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Botões
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

// Iniciar transição automática
function startInterval() {
  interval = setInterval(nextSlide, 5000); // muda a cada 5 segundos
}

// Resetar o intervalo ao interagir manualmente
function resetInterval() {
  clearInterval(interval);
  startInterval();
}

// Início
showSlide(currentIndex);
startInterval();



document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.carousel-slider');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const dotsContainer = document.querySelector('.carousel-dots');
    const carouselContainer = document.querySelector('.carousel-container');

    let currentIndex = 0;
    let slideInterval;

    // Criar os indicadores (bolinhas)
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(i);
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(document.querySelectorAll('.dot'));

    // Função para atualizar a exibição do carrossel
    function updateCarousel() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // Função para ir para um slide específico
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    // Função para ir para o próximo slide
    function goToNext() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    // Função para ir para o slide anterior
    function goToPrev() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    // Função para iniciar o intervalo de 5 segundos
    function startInterval() {
        slideInterval = setInterval(goToNext, 5000); // 5000ms = 5 segundos
    }
    
    // Função para reiniciar o intervalo (quando o usuário interage)
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // Event Listeners para os botões
    nextButton.addEventListener('click', () => {
        goToNext();
        resetInterval();
    });

    prevButton.addEventListener('click', () => {
        goToPrev();
        resetInterval();
    });

    // Pausa a troca automática quando o mouse está sobre o carrossel
    carouselContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
    carouselContainer.addEventListener('mouseleave', () => startInterval());

    // Inicia o carrossel
    startInterval();
});