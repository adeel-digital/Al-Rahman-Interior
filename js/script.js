/**
 * AL-RAHMAN INTERIOR & CONSTRUCTION — PREMIUM INTERACTION ENGINE v2
 * Scroll-spy navigation, fixed-glass scroll state, reveal-on-scroll,
 * and a Ken-Burns hero carousel.
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- SCROLL SPY: highlight the active nav pill ---
    const structuralSections = document.querySelectorAll('section[id]');
    const mobileNavigationPills = document.querySelectorAll('.nav-pill-item');

    const setActivePill = () => {
        let currentActiveSectionId = '';

        structuralSections.forEach(section => {
            const topBoundaryOffset = section.offsetTop;
            const containerHeight = section.clientHeight;
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
    };

    // --- NAVBAR / LOGO SCROLL STATE (adds shadow depth once scrolled) ---
    const navbar = document.getElementById('navbar');
    const logoBar = document.querySelector('.master-mobile-logo-bar');
    const setScrollChrome = () => {
        const scrolled = window.scrollY > 40;
        navbar.classList.toggle('is-scrolled', scrolled);
        if (logoBar) logoBar.classList.toggle('is-scrolled', scrolled);
    };

    window.addEventListener('scroll', () => {
        setActivePill();
        setScrollChrome();
    }, { passive: true });

    setActivePill();
    setScrollChrome();

    // --- KEN-BURNS HERO CAROUSEL ---
    const continuousSlides = document.querySelectorAll('.carousel-slide-frame');
    let currentSlideTrackingIndex = 0;

    function executeSlideRotation() {
        continuousSlides.forEach(slide => slide.classList.remove('active'));
        currentSlideTrackingIndex = (currentSlideTrackingIndex + 1) % continuousSlides.length;
        continuousSlides[currentSlideTrackingIndex].classList.add('active');
    }

    if (continuousSlides.length > 0) {
        setInterval(executeSlideRotation, 5500);
    }

    // --- REVEAL ON SCROLL ---
    const revealTargets = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealTargets.length) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        revealTargets.forEach(target => revealObserver.observe(target));
    } else {
        revealTargets.forEach(target => target.classList.add('is-visible'));
    }

    // --- ANIMATED STAT COUNTERS (runs once, when the stats strip enters view) ---
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateCount = (el) => {
        const suffixEl = el.querySelector('.stat-suffix');
        const suffixText = suffixEl ? suffixEl.textContent : '';
        const target = parseInt(el.textContent, 10);
        if (isNaN(target)) return;
        let current = 0;
        const step = Math.max(1, Math.round(target / 40));
        const tick = () => {
            current += step;
            if (current >= target) {
                el.textContent = target;
                if (suffixText) {
                    const span = document.createElement('span');
                    span.className = 'stat-suffix';
                    span.textContent = suffixText;
                    el.appendChild(span);
                }
                return;
            }
            el.textContent = current;
            requestAnimationFrame(() => setTimeout(tick, 20));
        };
        tick();
    };

    if ('IntersectionObserver' in window && statNumbers.length) {
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    statObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        statNumbers.forEach(el => statObserver.observe(el));
    }

    // --- SUBTLE GLASS TILT ON POINTER (desktop only, respects reduced motion) ---
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!prefersReducedMotion && isFinePointer) {
        document.querySelectorAll('.grid-card-item').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `perspective(800px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }
});
