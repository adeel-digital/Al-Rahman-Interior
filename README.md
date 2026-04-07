<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Al Rahman Interior - Premium construction & interior design company in Islamabad, Pakistan. Specializing in residential, commercial, and custom interior solutions.">
  <meta name="keywords" content="interior design Islamabad, construction company DHA, home renovation Pakistan, Al Rahman Interior, commercial spaces Islamabad">
  <meta name="author" content="Al Rahman Interior">
  <meta property="og:title" content="Al Rahman Interior | Construction & Interior Design">
  <meta property="og:description" content="Transforming spaces with precision, elegance, and craftsmanship in Islamabad.">
  <meta property="og:type" content="website">
  <title>Al Rahman Interior | Premium Construction & Interior Design</title>
  
  <!-- Fonts & Icons -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

  <style>
    :root {
      --primary: #1a2b4c;
      --secondary: #c9a227;
      --light: #f8f9fa;
      --dark: #111;
      --gray: #6c757d;
      --white: #ffffff;
      --shadow: 0 4px 20px rgba(0,0,0,0.08);
      --transition: all 0.3s ease;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Poppins', sans-serif; line-height: 1.6; color: var(--dark); background: var(--light); }
    a { text-decoration: none; color: inherit; }
    img { max-width: 100%; display: block; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    section { padding: 80px 0; }
    .section-title { text-align: center; margin-bottom: 50px; }
    .section-title h2 { font-size: 2.5rem; color: var(--primary); margin-bottom: 10px; }
    .section-title p { color: var(--gray); max-width: 600px; margin: 0 auto; }
    .btn { display: inline-block; padding: 12px 28px; background: var(--secondary); color: var(--white); font-weight: 500; border-radius: 6px; transition: var(--transition); border: 2px solid var(--secondary); cursor: pointer; }
    .btn:hover { background: transparent; color: var(--secondary); }
    .btn-outline { background: transparent; color: var(--white); border-color: var(--white); }
    .btn-outline:hover { background: var(--white); color: var(--primary); }

    /* Header */
    header { position: fixed; top: 0; left: 0; width: 100%; background: var(--white); box-shadow: var(--shadow); z-index: 1000; transition: var(--transition); }
    header.scrolled { padding: 10px 0; }
    nav { display: flex; justify-content: space-between; align-items: center; height: 80px; }
    .logo { font-size: 1.5rem; font-weight: 700; color: var(--primary); }
    .logo span { color: var(--secondary); }
    .nav-links { display: flex; gap: 30px; }
    .nav-links a { font-weight: 500; position: relative; }
    .nav-links a::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: var(--secondary); transition: var(--transition); }
    .nav-links a:hover::after { width: 100%; }
    .menu-toggle { display: none; font-size: 1.5rem; cursor: pointer; }

    /* Hero */
    #hero { height: 100vh; background: linear-gradient(rgba(26,43,76,0.85), rgba(26,43,76,0.7)), url('https://placehold.co/1920x1080/1a2b4c/ffffff?text=Interior+Design') center/cover no-repeat; display: flex; align-items: center; text-align: center; color: var(--white); margin-top: 0; }
    .hero-content h1 { font-size: 3.5rem; margin-bottom: 15px; line-height: 1.2; }
    .hero-content p { font-size: 1.2rem; margin-bottom: 30px; opacity: 0.9; max-width: 700px; margin-left: auto; margin-right: auto; }
    .hero-btns { display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; }

    /* About */
    #about .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
    .about-img { border-radius: 10px; overflow: hidden; box-shadow: var(--shadow); }
    .stats { display: flex; gap: 30px; margin-top: 30px; }
    .stat-item { text-align: center; }
    .stat-item h3 { font-size: 2rem; color: var(--secondary); }
    .stat-item p { color: var(--gray); font-size: 0.9rem; }

    /* Services */
    #services { background: var(--white); }
    .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
    .service-card { background: var(--light); padding: 30px; border-radius: 10px; text-align: center; transition: var(--transition); border: 1px solid #e0e0e0; }
    .service-card:hover { transform: translateY(-10px); box-shadow: var(--shadow); border-color: var(--secondary); }
    .service-icon { font-size: 2.5rem; color: var(--secondary); margin-bottom: 20px; }
    .service-card h3 { margin-bottom: 15px; color: var(--primary); }
    .service-card p { color: var(--gray); }

    /* Projects */
    .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
    .project-item { position: relative; overflow: hidden; border-radius: 10px; height: 250px; }
    .project-item img { width: 100%; height: 100%; object-fit: cover; transition: var(--transition); }
    .project-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(26,43,76,0.8); display: flex; flex-direction: column; justify-content: center; align-items: center; color: var(--white); opacity: 0; transition: var(--transition); }
    .project-item:hover img { transform: scale(1.1); }
    .project-item:hover .project-overlay { opacity: 1; }

    /* Testimonials */
    #testimonials { background: var(--primary); color: var(--white); }
    #testimonials .section-title h2, #testimonials .section-title p { color: var(--white); }
    .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
    .testimonial-card { background: rgba(255,255,255,0.1); padding: 30px; border-radius: 10px; backdrop-filter: blur(10px); }
    .testimonial-card i { color: var(--secondary); font-size: 1.2rem; margin-bottom: 15px; }
    .testimonial-card p { font-style: italic; margin-bottom: 20px; }
    .client { font-weight: 600; }

    /* Contact */
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
    .contact-info h3 { margin-bottom: 20px; color: var(--primary); }
    .contact-item { display: flex; align-items: flex-start; gap: 15px; margin-bottom: 20px; }
    .contact-item i { color: var(--secondary); font-size: 1.2rem; margin-top: 3px; }
    .contact-form { background: var(--white); padding: 30px; border-radius: 10px; box-shadow: var(--shadow); }
    .form-group { margin-bottom: 20px; }
    .form-group label { display: block; margin-bottom: 8px; font-weight: 500; }
    .form-group input, .form-group textarea { width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 6px; font-family: inherit; }
    .form-group textarea { height: 120px; resize: vertical; }
    .map-container { margin-top: 30px; border-radius: 10px; overflow: hidden; box-shadow: var(--shadow); }

    /* Footer */
    footer { background: var(--dark); color: var(--white); padding: 40px 0 20px; text-align: center; }
    .footer-content { display: flex; flex-direction: column; align-items: center; gap: 20px; margin-bottom: 30px; }
    .footer-links { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; }
    .footer-links a { transition: var(--transition); }
    .footer-links a:hover { color: var(--secondary); }
    .copyright { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; font-size: 0.9rem; color: var(--gray); }

    /* Responsive */
    @media (max-width: 768px) {
      .nav-links { position: fixed; top: 80px; right: -100%; width: 250px; height: calc(100vh - 80px); background: var(--white); flex-direction: column; padding: 30px; box-shadow: -5px 0 15px rgba(0,0,0,0.1); transition: var(--transition); }
      .nav-links.active { right: 0; }
      .menu-toggle { display: block; }
      .hero-content h1 { font-size: 2.5rem; }
      #about .about-grid, .contact-grid { grid-template-columns: 1fr; }
      .stats { justify-content: center; }
    }
  </style>
</head>
<body>

  <!-- Header -->
  <header id="header">
    <div class="container">
      <nav>
        <a href="#" class="logo">Al Rahman <span>Interior</span></a>
        <div class="menu-toggle" id="menuToggle"><i class="fas fa-bars"></i></div>
        <ul class="nav-links" id="navLinks">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section id="hero">
    <div class="container hero-content">
      <h1>Transforming Spaces,<br>Building Dreams</h1>
      <p>Premium construction & interior design solutions in Islamabad. We blend functionality with elegance to create spaces that inspire.</p>
      <div class="hero-btns">
        <a href="#contact" class="btn">Get a Free Quote</a>
        <a href="#projects" class="btn btn-outline">View Our Work</a>
      </div>
    </div>
  </section>

  <!-- About -->
  <section id="about">
    <div class="container">
      <div class="section-title">
        <h2>About Us</h2>
        <p>Crafting excellence in construction and interior design since 2015</p>
      </div>
      <div class="about-grid">
        <div class="about-text">
          <p>Al Rahman Interior is a leading construction and interior design firm based in Islamabad. With years of experience in delivering high-quality residential and commercial projects, we pride ourselves on precision, transparency, and customer satisfaction.</p>
          <p>Our team of architects, designers, and skilled craftsmen work collaboratively to turn your vision into reality. From concept to completion, we handle every detail with care and professionalism.</p>
          <div class="stats">
            <div class="stat-item"><h3>8+</h3><p>Years Experience</p></div>
            <div class="stat-item"><h3>150+</h3><p>Projects Delivered</p></div>
            <div class="stat-item"><h3>100%</h3><p>Client Satisfaction</p></div>
          </div>
        </div>
        <div class="about-img">
          <img src="https://placehold.co/600x400/c9a227/ffffff?text=Al+Rahman+Team" alt="Al Rahman Interior Team">
        </div>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section id="services">
    <div class="container">
      <div class="section-title">
        <h2>Our Services</h2>
        <p>Comprehensive solutions tailored to your needs</p>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-couch"></i></div>
          <h3>Interior Design</h3>
          <p>Custom layouts, material selection, and 3D visualization for homes and offices.</p>
        </div>
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-building"></i></div>
          <h3>Residential Construction</h3>
          <p>Turnkey house construction with quality materials and timely delivery.</p>
        </div>
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-store"></i></div>
          <h3>Commercial Spaces</h3>
          <p>Modern offices, retail stores, and restaurants designed for productivity & aesthetics.</p>
        </div>
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-hammer"></i></div>
          <h3>Renovation & Remodeling</h3>
          <p>Upgrade existing spaces with structural improvements and contemporary finishes.</p>
        </div>
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-clipboard-list"></i></div>
          <h3>Project Management</h3>
          <p>End-to-end supervision, budget tracking, and quality assurance.</p>
        </div>
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-tools"></i></div>
          <h3>Custom Furniture</h3>
          <p>Bespoke woodwork, cabinetry, and modular solutions crafted in-house.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects -->
  <section id="projects">
    <div class="container">
      <div class="section-title">
        <h2>Featured Projects</h2>
        <p>A glimpse into our recently completed spaces</p>
      </div>
      <div class="projects-grid">
        <div class="project-item">
          <img src="https://placehold.co/400x300/1a2b4c/ffffff?text=Luxury+Villa+DHA" alt="Luxury Villa DHA">
          <div class="project-overlay"><h3>Luxury Villa</h3><p>DHA Phase 5, Islamabad</p></div>
        </div>
        <div class="project-item">
          <img src="https://placehold.co/400x300/c9a227/111111?text=Modern+Office" alt="Modern Office">
          <div class="project-overlay"><h3>Corporate Office</h3><p>Blue Area, Islamabad</p></div>
        </div>
        <div class="project-item">
          <img src="https://placehold.co/400x300/2c3e50/ffffff?text=Apartment+Interior" alt="Apartment Interior">
          <div class="project-overlay"><h3>Apartment Makeover</h3><p>F-7 Markaz, Islamabad</p></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section id="testimonials">
    <div class="container">
      <div class="section-title">
        <h2>What Clients Say</h2>
        <p>Trusted by homeowners and businesses across Pakistan</p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <i class="fas fa-quote-left"></i>
          <p>"Al Rahman Interior transformed our house into a dream home. Their attention to detail and timely delivery exceeded our expectations."</p>
          <div class="client">- Ahmed Raza, DHA Islamabad</div>
        </div>
        <div class="testimonial-card">
          <i class="fas fa-quote-left"></i>
          <p>"Professional team, transparent pricing, and exceptional craftsmanship. Highly recommend for commercial interiors."</p>
          <div class="client">- Sara Khan, Business Owner</div>
        </div>
        <div class="testimonial-card">
          <i class="fas fa-quote-left"></i>
          <p>"From design to execution, everything was seamless. They truly listen to your vision and bring it to life."</p>
          <div class="client">- Tariq Mehmood, F-10 Sector</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact">
    <div class="container">
      <div class="section-title">
        <h2>Get In Touch</h2>
        <p>Ready to start your project? Contact us today for a free consultation.</p>
      </div>
      <div class="contact-grid">
        <div class="contact-info">
          <h3>Visit Our Office</h3>
          <div class="contact-item"><i class="fas fa-map-marker-alt"></i><div><strong>Address:</strong><br>DHA Phase 5, Islamabad, Pakistan</div></div>
          <div class="contact-item"><i class="fas fa-phone"></i><div><strong>Phone:</strong><br><a href="tel:03025113791">0302-5113791</a> | <a href="tel:03025112791">0302-5112791</a></div></div>
          <div class="contact-item"><i class="fas fa-envelope"></i><div><strong>Email:</strong><br>info@alrahmaninterior.com</div></div>
          <div class="contact-item"><i class="fas fa-clock"></i><div><strong>Working Hours:</strong><br>Mon - Sat: 9:00 AM - 7:00 PM</div></div>
          
          <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.044356729295!2d73.0803!3d33.6795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9a7b8c5d4e1b%3A0x5a2b1c3d4e5f6a7b!2sDHA%20Phase%205%2C%20Islamabad!5e0!3m2!1sen!2spk!4v1715000000000!5m2!1sen!2spk" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
        <div class="contact-form">
          <h3>Send a Message</h3>
          <form id="contactForm" onsubmit="handleFormSubmit(event)">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" required placeholder="Your Name">
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" required placeholder="your@email.com">
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="03XX-XXXXXXX">
            </div>
            <div class="form-group">
              <label for="message">Project Details</label>
              <textarea id="message" required placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" class="btn" style="width:100%;">Send Message</button>
            <p style="margin-top:15px; font-size:0.85rem; color:var(--gray);">* Form submissions require a backend. For instant contact, call us directly or use WhatsApp.</p>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="footer-content">
        <a href="#" class="logo" style="color:var(--white); font-size:1.8rem;">Al Rahman <span style="color:var(--secondary);">Interior</span></a>
        <div class="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="social-icons" style="font-size:1.5rem; display:flex; gap:15px;">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-whatsapp"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div class="copyright">
        &copy; 2024 Al Rahman Interior. All Rights Reserved. | Designed for Excellence
      </div>
    </div>
  </footer>

  <script>
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('active')));

    // Sticky Header Effect
    window.addEventListener('scroll', () => {
      document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
    });

    // Form Handler (Client-side only for GitHub Pages)
    function handleFormSubmit(e) {
      e.preventDefault();
      alert('Thank you! For immediate response, please call or WhatsApp us at 0302-5113791. We will review your message and contact you shortly.');
      e.target.reset();
    }

    // Smooth Scroll for Safari
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  </script>
</body>
</html>
