/**
 * AL-RAHMAN INTERIOR & CONSTRUCTION - MOBILE-FIRST MOTOR ENGINE
 * Performance Scope: Fluid Touch Response & Dynamic Carousel Tracking
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- MOBILE SCROLL SPY TRACKER FOR INTERACTIVE NAVIGATION PILLS ---
    const structuralSections = document.querySelectorAll('section');
    const mobileNavigationPills = document.querySelectorAll('.nav-pill-item');

    window.addEventListener('scroll', () => {
        let currentActiveSectionId = '';
        
        structuralSections.forEach(section => {
            const topBoundaryOffset = section.offsetTop;
            const containerHeight = section.clientHeight;
            
            // Scaled offset optimization specifically engineered for vertical phone scrolling
            if (window.scrollY >= (topBoundaryOffset - containerHeight / 2.5)) {
                currentActiveSectionId = section.getAttribute('id');
            }
        });

        mobileNavigationPills.forEach(pill => {
            pill.classList.remove('active');
            if (pill.getAttribute('href') === `#${currentActiveSectionId}`) {
                pill.classList.add('active');
            }
        });
    }, { passive: true });

    // --- INFINITE MOBILE AUTOMATED SLIDE FRAME ENGINE ---
    const continuousSlides = document.querySelectorAll('.carousel-slide-frame');
    let currentSlideTrackingIndex = 0;
    
    // Automated slide engine trigger (Rotates frames gracefully every 4.5 seconds)
    function executeSlideRotation() {
        continuousSlides.forEach(slide => slide.classList.remove('active'));
        currentSlideTrackingIndex = (currentSlideTrackingIndex + 1) % continuousSlides.length;
        continuousSlides[currentSlideTrackingIndex].classList.add('active');
    }

    if (continuousSlides.length > 0) {
        setInterval(executeSlideRotation, 4500);
    }
});
