/**
 * ==========================================================================
 * AL-RAHMAN INTERIOR - ADVANCED INTERACTIVE MOTION ENGINE
 * Designed, Developed & Marketed by AdBis Marketing Hub
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    // Global Core Configuration
    const CONFIG = {
        carouselSpeed: 5000,       // 5 seconds slide duration
        scrollThreshold: 60,       // pixels before navbar morphs
        tiltIntensity: 15          // Degrees for 3D mouse parallax
    };

    /* ==========================================================================
       1. ADVANCED HERO CAROUSEL MECHANISM
       ========================================================================== */
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let currentSlide = 0;
    let carouselTimer = null;

    if (slides.length > 0) {
        // Initialize First Slide
        slides[0].classList.add('active');
        
        const changeSlide = (targetIndex) => {
            slides.forEach(slide => {
                slide.classList.remove('active');
                slide.style.zIndex = '0';
            });
            
            // Boundary Loop Logic
            if (targetIndex >= slides.length) currentSlide = 0;
            else if (targetIndex < 0) currentSlide = slides.length - 1;
            else currentSlide = targetIndex;
            
            slides[currentSlide].classList.add('active');
            slides[currentSlide].style.zIndex = '1';
        };

        const triggerNext = () => changeSlide(currentSlide + 1);
        const triggerPrev = () => changeSlide(currentSlide - 1);

        // Control Listeners
        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                triggerNext();
                resetCarouselAutomation();
            });
            prevBtn.addEventListener('click', () => {
                triggerPrev();
                resetCarouselAutomation();
            });
        }

        // Automated Loops
        const startCarouselAutomation = () => {
            carouselTimer = setInterval(triggerNext, CONFIG.carouselSpeed);
        };

        const resetCarouselAutomation = () => {
            clearInterval(carouselTimer);
            startCarouselAutomation();
        };

        startCarouselAutomation();
    }


    /* ==========================================================================
       2. LIQUID GLASS NAVBAR SCROLL CONTROLLER
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        const handleNavbarMorph = () => {
            if (window.scrollY > CONFIG.scrollThreshold) {
                navbar.style.width = '100%';
                navbar.style.maxWidth = '100%';
                navbar.style.borderRadius = '0px';
                navbar.style.top = '0px';
                navbar.style.padding = '10px 50px';
                navbar.style.background = 'rgba(255, 255, 255, 0.96)';
                navbar.style.boxShadow = '0 15px 40px rgba(10, 25, 47, 0.08)';
            } else {
                navbar.style.width = '92%';
                navbar.style.maxWidth = '1400px';
                navbar.style.borderRadius = '20px';
                navbar.style.top = '25px';
                navbar.style.padding = '12px 40px';
                navbar.style.background = 'rgba(255, 255, 255, 0.75)';
                navbar.style.boxShadow = 'none';
            }
        };

        window.addEventListener('scroll', handleNavbarMorph);
        handleNavbarMorph(); // Initial run on load
    }


    /* ==========================================================================
       3. INTERSECTION OBSERVER (SCROLL-REVEAL ENGINE)
       ========================================================================== */
    // Dynamic CSS Injection for Scroll Animations
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .reveal-element { opacity: 0; transform: translateY(40px); transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1); }
        .reveal-element.revealed { opacity: 1; transform: translateY(0); }
    `;
    document.head.appendChild(styleSheet);

    // Target elements to animate on scroll
    const elementsToAnimate = document.querySelectorAll('.service-card, .text-block, .visual-block, .section-header, .portfolio-item');
    
    elementsToAnimate.forEach(el => el.classList.add('reveal-element'));

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    elementsToAnimate.forEach(element => revealObserver.observe(element));


    /* ==========================================================================
       4. 3D INTERACTIVE LIQUID TILT (MOUSE PARALLAX MECHANISM)
       ========================================================================== */
    const tiltCards = document.querySelectorAll('.portfolio-item, .service-card');

    tiltCards.forEach(card => {
        card.style.transformStyle = 'preserve-3d';
        card.style.transition = 'transform 0.1s ease, box-shadow 0.3s ease';

        card.addEventListener('mousemove', (e) => {
            const cardRect = card.getBoundingClientRect();
            const cardWidth = cardRect.width;
            const cardHeight = cardRect.height;
            
            // Calculate mouse positions relative to center of card (-0.5 to 0.5)
            const mouseX = (e.clientX - cardRect.left) / cardWidth - 0.5;
            const mouseY = (e.clientY - cardRect.top) / cardHeight - 0.5;

            // Calculate rotation angles
            const rotateX = (-mouseY * CONFIG.tiltIntensity).toFixed(2);
            const rotateY = (mouseX * CONFIG.tiltIntensity).toFixed(2);

            // Execute 3D Translation matrix
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            // Smoothly snap back to original position
            card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease';
        });
    });


    /* ==========================================================================
       5. DYNAMIC METRICS INCREMENTAL COUNTER
       ========================================================================== */
    const metricNumbers = document.querySelectorAll('.metric-card h3');
    
    const animateCounters = (counterElement) => {
        const rawTargetText = counterElement.innerText;
        const targetNumber = parseInt(rawTargetText.replace(/[^0-9]/g, ''), 10);
        const suffix = rawTargetText.replace(/[0-9]/g, ''); // Extract '+' symbol
        
        let initialCount = 0;
        const countSpeed = Math.max(Math.floor(2000 / targetNumber), 15); // Total animation time ~2s

        const countingProcess = setInterval(() => {
            initialCount += Math.ceil(targetNumber / 40); // Increments linearly
            if (initialCount >= targetNumber) {
                counterElement.innerText = targetNumber + suffix;
                clearInterval(countingProcess);
            } else {
                counterElement.innerText = initialCount + suffix;
            }
        }, countSpeed);
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.8 });

    metricNumbers.forEach(num => counterObserver.observe(num));


    /* ==========================================================================
       6. INTERACTIVE FORM VALIDATION SHIFTS
       ========================================================================== */
    const intakeFormInputs = document.querySelectorAll('.contact-form-box input, .contact-form-box select, .contact-form-box textarea');
    
    intakeFormInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'translateX(5px)';
            input.parentElement.style.transition = 'transform 0.3s ease';
        });
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'translateX(0px)';
        });
    });

});
