//Navbar qui change de couleur au scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; 
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Animation au scroll pour les sections
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

// Initialisation d'EmailJS
form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  // Envoi du formulaire via EmailJS
  emailjs.sendForm('service_portfolio', 'template_portfolio', this)
    .then(() => {
      alert('Message envoyé');
      form.reset();
    }, (error) => {
      console.error('Erreur EmailJS :', error);
      alert('Erreur lors de l’envoi, veuillez réessayer plus tard.');
    });
});

