// Animaciones fade-in al hacer scroll
function revealOnScroll() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}

// Navbar scroll effect
function handleNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Formulario de registro
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  
  // Simulación de envío
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.innerHTML;
  
  submitButton.disabled = true;
  submitButton.innerHTML = 'Enviando...';
  
  setTimeout(() => {
    document.getElementById('signupMsg').classList.remove('d-none');
    form.reset();
    submitButton.disabled = false;
    submitButton.innerHTML = originalText;
  }, 1500);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  // Event listeners
  window.addEventListener('scroll', () => {
    revealOnScroll();
    handleNavbarScroll();
  });
  
  document.getElementById('signupForm').addEventListener('submit', handleFormSubmit);
  
  // Inicializar animaciones
  revealOnScroll();
  handleNavbarScroll();
}); 