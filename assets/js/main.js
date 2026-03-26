// ==========================
// SCROLL SUAVE (fallback + melhoria)
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');

    if (targetId.length > 1) {
      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();

        window.scrollTo({
          top: target.offsetTop - 80, // ajuste para header fixo
          behavior: 'smooth'
        });
      }
    }
  });
});

// ==========================
// HEADER DINÂMICO (efeito ao rolar)
// ==========================
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ==========================
// LINK ATIVO NO MENU
// ==========================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-list a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ==========================
// MENU MOBILE (BASE PRONTA)
// ==========================
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuToggle.classList.toggle('active');
  });
}

// ==========================
// FECHAR MENU AO CLICAR
// ==========================
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      if (menuToggle) menuToggle.classList.remove('active');
    }
  });
});