/**
 * ICU Zambia Website - JavaScript Functionality
 * Information and Communication University
 * Modern, interactive web application with Bootstrap and custom animations
 */

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Hide loader when page loads
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
        }, 1000);
    }, 1500);
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Back to top button functionality
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 500) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    alert('✅ Thank you for your message! Our admissions team will contact you soon.');
    event.target.reset();
}

// Counter animation function
function animateCounter(elementId, target, suffix = '') {
    const element = document.getElementById(elementId);
    if (!element) return;

    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 30);
}

// Start counter animation when stats section is in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter('stat-year', 15, '+');
            animateCounter('stat-programs', 25, '+');
            animateCounter('stat-students', 2000, '+');
            animateCounter('stat-grad', 95, '%');
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Program cards hover effect
document.querySelectorAll('.program-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Course cards interactive
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', function() {
        const courseName = this.querySelector('h5').textContent;
        alert(`📚 You selected: ${courseName}. Course details would open in a full version.`);
    });
});

// Faculty cards interactive
document.querySelectorAll('.faculty-card').forEach(card => {
    card.addEventListener('click', function() {
        const facultyName = this.querySelector('h5').textContent;
        alert(`👨‍🏫 Faculty profile for ${facultyName} would open in a full version.`);
    });
});

// Campus cards interactive
document.querySelectorAll('.campus-card').forEach(card => {
    card.addEventListener('click', function() {
        const location = this.querySelector('h5').textContent;
        alert(`📍 Virtual tour of ${location} would open in a full version.`);
    });
});

// News cards interactive
document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('click', function() {
        const newsTitle = this.querySelector('h5').textContent;
        alert(`📰 Full article: "${newsTitle}" would open in a full version.`);
    });
});

// Donation/Apply buttons
function applyNow(program) {
    alert(`🎓 Thank you for your interest in ${program}. Our admissions team will contact you with application details.`);
}

// Newsletter subscription (if added)
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert(`📧 Thank you for subscribing with: ${email}. You'll receive our updates.`);
    event.target.reset();
}

// Current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        footerText.innerHTML = `&copy; ${new Date().getFullYear()} ICU Zambia. All rights reserved. | Information and Communication University`;
    }
});

// Console welcome message
console.log('%c🎓 Welcome to ICU Zambia Website', 'font-size: 20px; color: #003366; font-weight: bold;');
console.log('%cInformation and Communication University', 'font-size: 16px; color: #FF6600;');
console.log('%cBuilt with HTML, CSS, JavaScript & Bootstrap', 'font-size: 14px; color: #00A651;');

// Add smooth hover effect to all buttons
document.querySelectorAll('.btn-custom, .btn-submit, .btn-donate').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Form input animations
document.querySelectorAll('.form-control, .form-select').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
        this.parentElement.style.transition = 'all 0.3s ease';
    });
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Intersection Observer for fade-in animations
const fadeElements = document.querySelectorAll('[data-aos]');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
    fadeObserver.observe(element);
});

// Dynamic year display for establishment
const currentYear = new Date().getFullYear();
const yearsSince = currentYear - 2009;
const establishmentBadge = document.querySelector('.establishment-badge .year');
if (establishmentBadge) {
    establishmentBadge.innerHTML = '2009';
}

// Add tooltips to navigation
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.setAttribute('title', `Go to ${link.textContent} section`);
});

// Prevent default for anchor links with hash only
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => e.preventDefault());
});

// Add loading animation to buttons
document.querySelectorAll('.btn-custom').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (!this.classList.contains('no-loading')) {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 1000);
        }
    });
});

// Program filter functionality (if needed)
function filterPrograms(category) {
    const programs = document.querySelectorAll('.program-card');
    programs.forEach(program => {
        if (category === 'all' || program.dataset.category === category) {
            program.style.display = 'block';
        } else {
            program.style.display = 'none';
        }
    });
}

// Search functionality (if needed)
function searchCourses() {
    const searchTerm = document.getElementById('courseSearch').value.toLowerCase();
    const courses = document.querySelectorAll('.course-card');

    courses.forEach(course => {
        const title = course.querySelector('h5').textContent.toLowerCase();
        const description = course.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}

// Mobile menu close after click
const navLinksMobile = document.querySelectorAll('.nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinksMobile.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
            navbarToggler.click();
        }
    });
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #FF6600, #003366);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals or menus
        const navbarCollapse = document.querySelector('.navbar-collapse.show');
        if (navbarCollapse) {
            navbarToggler.click();
        }
    }
});

// Touch device detection
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
if (isTouchDevice) {
    document.body.classList.add('touch-device');
}

// Add to home screen prompt (for mobile)
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Show install button
    const installBtn = document.createElement('button');
    installBtn.innerHTML = '<i class="fas fa-download"></i> Install App';
    installBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: #FF6600;
        color: white;
        border: none;
        padding: 15px 30px;
        border-radius: 50px;
        font-weight: bold;
        cursor: pointer;
        z-index: 999;
        box-shadow: 0 5px 20px rgba(255,102,0,0.3);
        animation: pulse 2s infinite;
    `;

    installBtn.onclick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response to install: ${outcome}`);
            deferredPrompt = null;
            installBtn.remove();
        }
    };

    document.body.appendChild(installBtn);
});

// Service worker registration (for PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}