/**
 * AL-RAHMAN INTERIOR & CONSTRUCTION - INTERACTIVE MOTOR ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- HAMBURGER MENU ENGINE (BULLETPROOF FIX) ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const menuItems = document.querySelectorAll('.menu-item');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            navMenu.classList.toggle('show-menu');
            const icon = hamburgerBtn.querySelector('i');
            
            if (navMenu.classList.contains('show-menu')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                navMenu.classList.remove('show-menu');
                const icon = hamburgerBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // --- CONTEXT HOVER SYNC ---
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTopPosition = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTopPosition - sectionHeight / 3)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    });

    // --- INFINITE AUTOMATED ROTATION SYSTEM (CONTINUOUS SWIPE) ---
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let currentSlideIndex = 0;
    
    // Engine locked at 4000ms (4 seconds) for continuous aggressive pacing
    let rotationTimerInterval = setInterval(executeNextSlideTransition, 4000);

    function updateCarouselTrackUI() {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentSlideIndex].classList.add('active');
    }

    function executeNextSlideTransition() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateCarouselTrackUI();
    }

    function executePrevSlideTransition() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        updateCarouselTrackUI();
    }

    // Manual intervention resets timer but keeps engine running
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            clearInterval(rotationTimerInterval);
            executeNextSlideTransition();
            rotationTimerInterval = setInterval(executeNextSlideTransition, 4000);
        });

        prevBtn.addEventListener('click', () => {
            clearInterval(rotationTimerInterval);
            executePrevSlideTransition();
            rotationTimerInterval = setInterval(executeNextSlideTransition, 4000);
        });
    }
});
