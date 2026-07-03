/* ==========================================================================
   AL-RAHMAN INTERIOR & CONSTRUCTION - MASTER ARCHITECTURAL SHEET
   Theme: Balanced iOS Glassmorphic Contrast UI Framework
   ========================================================================== */

:root {
    --navy-blue: #0A192F;      
    --navy-light: #172A45;     
    --text-black: #050C16;     /* Solid High-Visibility Black */
    --text-muted: #111827;     /* High Contrast Grey-to-Black Conversion */
    --white-pure: #FFFFFF;
    
    /* MODERATED CONTRAST iOS UI GLASSMORPHISM MATRIX */
    --ios-glass-bg: rgba(255, 255, 255, 0.76); 
    --ios-glass-border: rgba(255, 255, 255, 0.60);
    --ios-glass-shadow: 0 12px 35px rgba(10, 25, 47, 0.08), inset 0 1px 0px rgba(255, 255, 255, 0.4);
    
    --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-smooth: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

/* --- RESET ENGINE --- */
* { margin: 0; padding: 0; box-sizing: border-box; scroll-behavior: smooth; -webkit-tap-highlight-color: transparent; }

body {
    font-family: 'Inter', sans-serif;
    color: var(--text-black);
    background: #F8FAFC;
    overflow-x: hidden;
    width: 100%;
    line-height: 1.6;
}

h1, h2, h3, h4 { font-family: 'Playfair Display', serif; color: var(--navy-blue); font-weight: 700; }
span { color: var(--navy-blue); font-weight: 700; }
a { text-decoration: none !important; }

/* --- APPLE iOS UI SPECIFIED GLASS PANEL --- */
.ios-glass {
    background: var(--ios-glass-bg);
    backdrop-filter: blur(20px) saturate(190%);
    -webkit-backdrop-filter: blur(20px) saturate(190%);
    border: 1px solid var(--ios-glass-border);
    box-shadow: var(--ios-glass-shadow);
}

/* --- TEXT HIGH HIGH-CONTRAST ACCENTS --- */
.dynamic-black-text { color: var(--text-muted) !important; font-weight: 600 !important; }
.hero-subtext-forced { color: var(--text-black) !important; font-weight: 700 !important; }
.text-navy-forced { color: var(--navy-blue) !important; }

/* --- BAR 1: CENTERED BRANDING GLASS EMBED BAR --- */
.logo-bar-centered-container {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1100;
    background: var(--ios-glass-bg);
    backdrop-filter: blur(20px) saturate(190%);
    -webkit-backdrop-filter: blur(20px) saturate(190%);
    border: 1px solid var(--ios-glass-border);
    box-shadow: var(--ios-glass-shadow);
    padding: 14px 45px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition-smooth);
    width: auto;
}
.logo-bar-centered-container:hover { transform: translateX(-50%) translateY(-2px); box-shadow: 0 15px 40px rgba(10,25,47,0.15); }
.logo-centered-link { display: inline-block; }
.logo-centered-link img { height: 70px; /* Enhanced visibility architecture */ width: auto; object-fit: contain; display: block; }

/* --- BAR 2: LINK PILL ENGINE (ELEGANTLY ALIGNED BOTTOM) --- */
.navbar-pill-container {
    position: fixed;
    top: 135px; /* Offset to sit cleanly underneath the brand banner */
    left: 50%;
    transform: translateX(-50%);
    z-index: 1090;
    background: var(--ios-glass-bg);
    backdrop-filter: blur(20px) saturate(190%);
    -webkit-backdrop-filter: blur(20px) saturate(190%);
    border: 1px solid var(--ios-glass-border);
    box-shadow: var(--ios-glass-shadow);
    padding: 6px 14px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    transition: var(--transition-smooth);
    width: auto;
}
.nav-links-pills { list-style: none; display: flex; gap: 8px; align-items: center; }
.pill-item {
    color: var(--navy-blue) !important;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 10px 24px;
    border-radius: 30px;
    transition: var(--transition-fast);
}
.pill-item:hover, .pill-item.active {
    background: var(--navy-blue);
    color: var(--white-pure) !important;
    box-shadow: 0 4px 15px rgba(10, 25, 47, 0.2);
}

/* --- ACTION UTILITIES MATRIX --- */
.cta-navy-solid, .cta-navy-outline, .cta-quote-highlight {
    padding: 16px 36px; border-radius: 12px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 1px; font-size: 13px; text-align: center; display: inline-block; cursor: pointer; transition: var(--transition-fast);
}
.cta-navy-solid { background: var(--navy-blue); color: var(--white-pure) !important; box-shadow: 0 4px 15px rgba(10,25,47,0.3); }
.cta-navy-solid:hover { background: var(--navy-light); transform: translateY(-2px); box-shadow: 0 8px 25px rgba(10,25,47,0.4); }

.cta-navy-outline { background: transparent; color: var(--navy-blue) !important; border: 2px solid var(--navy-blue); }
.cta-navy-outline:hover { background: var(--navy-blue); color: var(--white-pure) !important; }

/* 3D Distinct Floating Quote Trigger */
.cta-quote-highlight {
    background: #E11D48; /* Premium Ruby-Crimson Accent */
    color: var(--white-pure) !important;
    box-shadow: 0 6px 20px rgba(225, 29, 72, 0.35);
    border: 1px solid #E11D48;
}
.cta-quote-highlight:hover {
    background: #BE123C;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(225, 29, 72, 0.5);
}

/* --- HERO LAYER SYSTEM --- */
.hero-viewport { height: 100vh; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.carousel-track { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; }
.carousel-slide { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-size: cover; background-position: center; opacity: 0; transition: opacity 1.2s ease-in-out; }
.carousel-slide.active { opacity: 1; }

.hero-content-board { text-align: center; padding: 65px; border-radius: 32px; width: 85%; max-width: 850px; z-index: 2; margin-top: 180px; }
.hero-content-board h1 { font-size: 3.8rem; line-height: 1.15; margin-bottom: 24px; color: var(--navy-blue); letter-spacing: -1px; }
.hero-content-board p { font-size: 1.25rem; margin-bottom: 35px; }
.hero-action-cluster { display: flex; gap: 15px; justify-content: center; align-items: center; }

.carousel-manual-nav { position: absolute; bottom: 40px; right: 40px; display: flex; gap: 15px; z-index: 10; }
.nav-arrow-btn { 
    background: var(--ios-glass-bg); border: 1px solid var(--ios-glass-border); color: var(--navy-blue);
    font-size: 20px; width: 55px; height: 55px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: var(--transition-fast);
}
.nav-arrow-btn:hover { background: var(--navy-blue); color: var(--white-pure) !important; }

/* --- SECTION BLOCKS --- */
.content-section-layout { padding: 120px 0; position: relative; width: 100%; }
.site-container { width: 90%; max-width: 1250px; margin: 0 auto; }
.matrix-tinted { background: linear-gradient(to bottom, #F1F5F9, #E2E8F0); }
.contact-surface-gradient { background: linear-gradient(135deg, #0A192F, #172A45); }

.dual-grid-system { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 50px; align-items: center; }
.section-display-title { font-size: 2.8rem; margin-bottom: 20px; line-height: 1.2; }
.body-narrative-text { font-size: 1.1rem; margin-bottom: 15px; }
.bounded-media { width: 100%; border-radius: 24px; display: block; box-shadow: 0 20px 45px rgba(0,0,0,0.12); }

.section-intro-header { text-align: center; padding: 40px; border-radius: 24px; margin-bottom: 50px; }
.section-intro-header h2 { font-size: 2.6rem; }

/* --- HOVER SYSTEM ENGINES --- */
.interactive-image-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
.grid-display-item { position: relative; border-radius: 24px; overflow: hidden; height: 380px; cursor: pointer; border: 1px solid var(--ios-glass-border); box-shadow: var(--ios-glass-shadow); }
.grid-display-item img { width: 100%; height: 100%; object-fit: cover; transition: var(--transition-smooth); }

.hover-reveal-overlay {
    position: absolute; bottom: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to top, rgba(10, 25, 47, 0.96) 0%, rgba(10, 25, 47, 0.65) 60%, transparent 100%);
    display: flex; flex-direction: column; justify-content: flex-end; padding: 35px 25px;
    opacity: 0; transform: translateY(15px); transition: var(--transition-smooth);
}
.hover-reveal-overlay h3 { font-size: 1.5rem; color: var(--white-pure); font-family: 'Playfair Display', serif; }
.overlay-desc { font-size: 0.95rem; color: rgba(255, 255, 255, 0.85) !important; font-weight: 400; }
.location-brand-tag { font-size: 11px; font-weight: 700; color: var(--white-pure); background: #25D366; padding: 4px 12px; border-radius: 20px; align-self: flex-start; margin-bottom: 10px; text-transform: uppercase; }

.grid-display-item:hover img { transform: scale(1.08); }
.grid-display-item:hover .hover-reveal-overlay { opacity: 1; transform: translateY(0); }

/* --- FORM INTENTION MODULES --- */
.contact-box-wrapper { display: grid; grid-template-columns: 1fr 1.1fr; gap: 50px; }
.info-contact-line { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; font-size: 1.1rem; font-weight: 700; color: var(--navy-blue); }
.info-contact-line i { font-size: 1.3rem; background: rgba(10, 25, 47, 0.05); padding: 12px; border-radius: 50%; }

.form-intake-card { padding: 45px; border-radius: 28px; }
.form-intake-card input, .form-intake-card select, .form-intake-card textarea {
    width: 100%; padding: 16px 20px; margin-bottom: 20px; background: rgba(255, 255, 255, 0.85);
    border: 1px solid rgba(10, 25, 47, 0.12); border-radius: 10px; color: var(--text-black);
    font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500; transition: var(--transition-fast);
}

/* --- SIDE SYSTEM FLOW SYSTEM --- */
.social-sidebar-widget { position: fixed; left: 0; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; z-index: 1000; border-radius: 0 16px 16px 0; overflow: hidden; background: var(--ios-glass-bg); border: 1px solid var(--ios-glass-border); padding: 10px 0; }
.widget-icon { font-size: 20px; padding: 12px 20px; text-align: center; color: var(--navy-blue); }
.widget-icon:hover { background: var(--navy-blue); color: var(--white-pure) !important; }

.floating-whatsapp-widget { position: fixed; bottom: 30px; right: 30px; background: #25D366; color: var(--white-pure) !important; width: 60px; height: 60px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 30px; z-index: 1000; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3); transition: var(--transition-smooth); }
.floating-whatsapp-widget:hover { transform: scale(1.06) rotate(-8deg); }

.master-footer-board { width: 90%; max-width: 1250px; margin: 0 auto 30px; padding: 30px; border-radius: 24px; text-align: center; }
.footer-content-stack p { font-weight: 600; font-size: 14px; color: var(--text-black); }
.brand-agency-credit-note { color: var(--navy-blue); font-weight: 700; margin-top: 8px; }

/* ==========================================================================
   ULTIMATE MOBILE RESPONSIVE ENGINE (DYNAMIC FORCE LOCK)
   ========================================================================== */
@media (max-width: 1024px) {
    .dual-grid-system, .contact-box-wrapper { grid-template-columns: 1fr; gap: 35px; }
    .hero-content-board h1 { font-size: 2.8rem; }
}

@media (max-width: 768px) {
    body, html { overflow-x: hidden !important; width: 100% !important; }
    .section-layout { padding: 60px 0 !important; }

    /* BAR 1 ENHANCEMENT: Perfectly centered and prominent brand logo */
    .logo-bar-centered-container {
        position: absolute !important; top: 15px !important; left: 50% !important;
        transform: translateX(-50%) !important; width: 92% !important;
        padding: 10px !important; border-radius: 16px !important;
    }
    .logo-bar-centered-container img { height: 55px !important; margin: 0 auto !important; }

    /* BAR 2 ENHANCEMENT: Spacious multi-link setup without crowd bottlenecks */
    .navbar-pill-container {
        position: absolute !important; top: 95px !important; left: 50% !important;
        transform: translateX(-50%) !important; width: 92% !important; padding: 6px 12px !important;
        border-radius: 16px !important; justify-content: center !important;
    }
    .nav-links-pills { width: 100% !important; justify-content: space-around !important; gap: 0 !important; }
    .pill-item { font-size: 11px !important; padding: 8px 12px !important; font-weight: 700 !important; }

    /* Hero panel restructuring targeting layout variables */
    .hero-viewport { padding-top: 170px !important; height: auto !important; min-height: 100vh !important; display: flex !important; align-items: center !important; }
    .hero-content-board { padding: 30px 20px !important; width: 92% !important; margin: 30px auto !important; border-radius: 20px !important; }
    .hero-content-board h1 { font-size: 1.85rem !important; line-height: 1.2 !important; }
    .hero-content-board p { font-size: 0.95rem !important; margin-bottom: 25px !important; }
    
    .hero-action-cluster { flex-direction: column !important; gap: 12px !important; width: 100% !important; }
    .hero-action-cluster a { width: 100% !important; padding: 14px !important; margin: 0 !important; }
    .carousel-manual-nav { display: none !important; }

    .interactive-image-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
    .grid-display-item { height: 320px !important; }
    
    .hover-reveal-overlay { opacity: 1 !important; transform: translateY(0) !important; padding: 25px 20px !important; background: linear-gradient(to top, rgba(10,25,47,0.98) 0%, rgba(10,25,47,0.7) 75%, transparent 100%) !important; }
    .hover-reveal-overlay h3 { font-size: 1.35rem !important; }

    .section-display-title, .section-intro-header h2 { font-size: 2rem !important; text-align: center; }
    .body-narrative-text { text-align: center; font-size: 1rem !important; }
    .padding-large, .form-intake-card { padding: 30px 20px !important; border-radius: 20px !important; }
    
    .social-sidebar-widget { display: flex !important; flex-direction: row !important; top: auto !important; bottom: 20px !important; left: 20px !important; transform: none !important; border-radius: 30px !important; padding: 4px 10px !important; }
    .widget-icon { padding: 8px 12px !important; font-size: 16px !important; }
    .floating-whatsapp-widget { bottom: 15px !important; right: 20px !important; width: 52px !important; height: 52px !important; font-size: 24px !important; }

    .master-footer-board { width: 92% !important; padding: 20px 10px !important; }
}
