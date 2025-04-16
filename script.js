document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-in-section');

  function checkVisibility() {
    const triggerBottom = window.innerHeight - 100;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        section.classList.add('is-visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});
