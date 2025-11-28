// --- Theme Toggle Logic ---
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggleBtn.querySelector('i');

// Check for saved user preference, if any, on load of the website
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'light-mode') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// --- Header scroll behavior: add .scrolled when user scrolls down ---
const header = document.querySelector('.header');
let lastKnownScrollY = 0;
let ticking = false;

function onScroll() {
    lastKnownScrollY = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (lastKnownScrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll, { passive: true });

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    let theme = 'dark-mode';
    if (body.classList.contains('light-mode')) {
        theme = 'light-mode';
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    localStorage.setItem('theme', theme);
});

// --- Hamburger Menu Logic ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close menu when clicking a link (mobile UX)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
        }
    });
});

// --- Carousel Logic ---
const slide = document.getElementById('carouselSlide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = slide.querySelectorAll('img');
let currentIndex = 0;
const totalSlides = images.length;

function updateSlide() {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

if (totalSlides > 1) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    // Auto-slide
    setInterval(nextSlide, 5000);
} else {
    // Hide buttons if only 1 image
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
}

// --- WhatsApp Forms Logic ---
function sendToWhatsApp(message, phone = "5493794018700") {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
}

// Formulario de Peticiones
const askForm = document.getElementById('AskForm');
if (askForm) {
    askForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const msg = document.getElementById('AskMessage').value;
        sendToWhatsApp(`Hola, quiero dejar una petición de oración:\n\n${msg}`);
        document.getElementById('AskMessage').value = '';
    });
}

// Formulario de Contacto General
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value;
        const msg = document.getElementById('contactMessage').value;
        sendToWhatsApp(`Hola, soy ${name}. Les escribo desde la web:\n\n${msg}`);
        document.getElementById('contactName').value = '';
        document.getElementById('contactMessage').value = '';
    });
}

// --- Scroll to Top Button Logic ---
const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
    // Show/Hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }, { passive: true });

    // Smooth scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
