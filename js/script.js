// 1. Smooth Scrolling for all Navigation & Button Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 2. Dynamic Liquid Glass Navbar on Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(11, 16, 33, 0.85)';
        nav.style.padding = '15px 0';
        nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.background = 'rgba(11, 16, 33, 0.4)';
        nav.style.padding = '20px 0';
        nav.style.boxShadow = 'none';
    }
});

// 3. High-Res Video Carousel Logic (Rotates every 6 seconds)
const videos = document.querySelectorAll('.hero-video');
let currentVideo = 0;

if(videos.length > 1) {
    setInterval(() => {
        // Fade out current video
        videos[currentVideo].classList.remove('active');
        
        // Move to next video
        currentVideo = (currentVideo + 1) % videos.length;
        
        // Fade in new video
        videos[currentVideo].classList.add('active');
        // Reset playback so it starts fresh when shown
        videos[currentVideo].currentTime = 0; 
        videos[currentVideo].play();
    }, 6000); // 6000ms = 6 seconds transition
}
