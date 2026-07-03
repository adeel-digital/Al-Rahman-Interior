/**
 * AL-RAHMAN INTERIOR & CONSTRUCTION - INTERACTIVE MOTOR ENGINE
 * Optimization Framework: Sync State Management
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- CONTEXT HOVER SYNC: PILL NAVIGATION NAVIGATION ---
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.pill-item');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTopPosition = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Evaluates current active viewport bounds cleanly
            if (window.scrollY >= (sectionTopPosition - sectionHeight / 3)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    });

    // --- INFINITE AUTOMATED ROTATION SYSTEM CAROUSEL ENGINE ---
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let currentSlideIndex = 0;
    let rotationTimerInterval = setInterval(executeNextSlideTransition, 5000);

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

    // Manual interface triggers execution routines
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            clearInterval(rotationTimerInterval);
            executeNextSlideTransition();
            rotationTimerInterval = setInterval(executeNextSlideTransition, 5000);
        });

        prevBtn.addEventListener('click', () => {
            clearInterval(rotationTimerInterval);
            executePrevSlideTransition();
            rotationTimerInterval = setInterval(executeNextSlideTransition, 5000);
        });
    }
});
