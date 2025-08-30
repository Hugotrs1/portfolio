document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".section:not(:first-of-type)");
  const triggerBottom = window.innerHeight * 0.8;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("show");
    }
  });
});
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  // Envoi du formulaire via EmailJS
  emailjs.sendForm('service_portfolio', 'template_portfolio', this)
    .then(() => {
      alert('Message envoyé avec succès !');
      form.reset();
    }, (error) => {
      console.error('Erreur EmailJS :', error);
      alert('Erreur lors de l’envoi, réessaye plus tard.');
    });
});
