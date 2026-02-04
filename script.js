// ========================================
// SHRI DURGAMBA CAB SERVICE - JAVASCRIPT
// ========================================

// ========================================
// HOMEPAGE 3D CAR & TEXT ANIMATIONS
// ========================================

// Animated Text Slider (Only on Homepage)
if (document.getElementById('animatedText')) {
    const texts = [
        "SHRI DURGAMBA CAB SERVICE",
        "Trusted Taxi Service in Kukke Subramanya",
        "Pilgrims | Tourists | Airport Transfers"
    ];
    let textIndex = 0;
    const animatedText = document.getElementById('animatedText');
    
    setInterval(() => {
        textIndex = (textIndex + 1) % texts.length;
        animatedText.style.opacity = '0';
        setTimeout(() => {
            animatedText.textContent = texts[textIndex];
            animatedText.style.opacity = '1';
        }, 500);
    }, 4000);
    
    // Car Color Change Animation
    const carThemes = ['red-theme', 'yellow-theme', 'blue-theme'];
    const carColors = ['#d32f2f', '#f7971e', '#667eea'];
    let colorIndex = 0;
    const homeSection = document.getElementById('home');
    const carParts = document.querySelectorAll('.car-part');
    
    setInterval(() => {
        colorIndex = (colorIndex + 1) % carThemes.length;
        homeSection.className = carThemes[colorIndex];
        document.documentElement.style.setProperty('--primary-color', carColors[colorIndex]);
        carParts.forEach(part => {
            if (part.classList.contains('car-roof')) {
                part.style.background = `linear-gradient(to bottom, ${carColors[colorIndex]}, rgba(0,0,0,0.2))`;
            } else {
                part.style.background = carColors[colorIndex];
            }
        });
    }, 3000);
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// TESTIMONIALS SLIDER
// ========================================

let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const sliderDots = document.querySelectorAll('.slider-dot');

function showTestimonial(index) {
    if (testimonialCards.length === 0) return;
    
    testimonialCards.forEach(card => card.classList.remove('active'));
    sliderDots.forEach(dot => dot.classList.remove('active'));
    testimonialCards[index].classList.add('active');
    if (sliderDots[index]) {
        sliderDots[index].classList.add('active');
    }
    currentTestimonial = index;
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

// Auto-rotate testimonials
if (testimonialCards.length > 0) {
    setInterval(() => {
        nextTestimonial();
    }, 5000);
}

// ========================================
// MODAL FUNCTIONS
// ========================================

function openPlaceModal(place, distance, time, description, iconClass) {
    const modal = document.getElementById('placeModal');
    if (!modal) return;
    
    document.getElementById('modalTitle').textContent = place;
    
    if (document.getElementById('modalDistance')) {
        document.getElementById('modalDistance').textContent = distance;
    }
    
    if (document.getElementById('modalTime')) {
        document.getElementById('modalTime').textContent = time;
    }
    
    if (document.getElementById('modalDescription') && description) {
        document.getElementById('modalDescription').textContent = description;
    }
    
    if (document.getElementById('modalIcon') && iconClass) {
        document.getElementById('modalIcon').innerHTML = `<i class="${iconClass}"></i>`;
    }
    
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('placeModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('placeModal');
    if (e.target === modal) {
        closeModal();
    }
});

// ========================================
// SCROLL ANIMATION OBSERVER
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-fade').forEach(el => observer.observe(el));

// ========================================
// FORM SUBMISSION (WhatsApp Integration)
// ========================================

const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message') ? document.getElementById('message').value : '';
        const email = document.getElementById('email') ? document.getElementById('email').value : '';
        const date = document.getElementById('date') ? document.getElementById('date').value : '';
        
        let whatsappMessage = `*New Cab Booking Request*%0A%0A`;
        whatsappMessage += `Name: ${name}%0A`;
        whatsappMessage += `Phone: ${phone}%0A`;
        if (email) whatsappMessage += `Email: ${email}%0A`;
        whatsappMessage += `Service: ${service}%0A`;
        if (date) whatsappMessage += `Date: ${date}%0A`;
        if (message) whatsappMessage += `Message: ${message}`;
        
        window.open(`https://wa.me/919482910204?text=${whatsappMessage}`, '_blank');
    });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// STATISTICS COUNTER ANIMATION
// ========================================

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(current);
        }
    }, 30);
}

// Observe stat numbers
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-count'));
            animateCounter(entry.target, target);
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number[data-count]').forEach(el => {
    statObserver.observe(el);
});

// ========================================
// PREVENT ORPHAN MODAL TRIGGERS
// ========================================

// Ensure modal close button works
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-close')) {
        closeModal();
    }
});

// ========================================
// PAGE LOAD ANIMATIONS
// ========================================

window.addEventListener('load', () => {
    // Add smooth entrance to page elements
    document.body.style.opacity = '1';
});

// ========================================
// DYNAMIC DATE SETTING FOR BOOKING FORM
// ========================================

const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

console.log('SHRI DURGAMBA CAB SERVICE - Website Loaded Successfully');
