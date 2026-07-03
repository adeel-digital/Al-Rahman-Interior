// 1. Navbar Dynamic Shrink & Blend Scroll Controller
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 60) {
        navbar.style.width = '100%';
        navbar.style.maxWidth = '100%';
        navbar.style.borderRadius = '0px';
        navbar.style.top = '0px';
        navbar.style.background = 'rgba(250, 249, 245, 0.98)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
    } else {
        navbar.style.width = '90%';
        navbar.style.maxWidth = '1200px';
        navbar.style.borderRadius = '100px';
        navbar.style.top = '30px';
        navbar.style.background = 'rgba(250, 249, 245, 0.85)';
        navbar.style.boxShadow = 'none';
    }
});

// 2. Active Section Highlighting Engine for Smooth Nav Buttons
const sections = document.querySelectorAll('section');
const navButtons = document.querySelectorAll('.nav-links a.nav-btn');

window.addEventListener('scroll', () => {
    let currentActive = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            currentActive = section.getAttribute('id');
        }
    });

    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('href').includes(currentActive)) {
            btn.classList.add('active');
        }
    });
});
