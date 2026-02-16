document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dots = Array.from(document.querySelectorAll('.dot'));
  const prevBtn = document.querySelector('.carousel-control.prev');
  const nextBtn = document.querySelector('.carousel-control.next');
  let index = 0;

  const setActive = (newIndex) => {
    index = (newIndex + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  };

  prevBtn.addEventListener('click', () => setActive(index - 1));
  nextBtn.addEventListener('click', () => setActive(index + 1));
  dots.forEach(dot => dot.addEventListener('click', () => setActive(Number(dot.dataset.index))));

  // swipe support
  const slidesContainer = document.querySelector('.slides');
  let startX = null;
  slidesContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  slidesContainer.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const delta = e.changedTouches[0].clientX - startX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        setActive(index - 1);
      } else {
        setActive(index + 1);
      }
    }
    startX = null;
  });
});
