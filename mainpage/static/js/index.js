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
