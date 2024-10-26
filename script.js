// Efeito de transição ao rolar a página
function revealOnScroll() {
    const reveals = document.querySelectorAll('.about-section, .about-image, .about-text, .gallery-item');
  
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 150;
  
      if (elementTop < windowHeight - revealPoint) {
        reveals[i].classList.add('visible');
      } else {
        reveals[i].classList.remove('visible');
      }
    }
  }
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  