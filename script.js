// --- 1. Theme Toggle Logic ---
const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        themeIcon.className = 'fa-solid fa-sun text-lg text-amber-500';
    } else {
        htmlElement.classList.add('dark');
        themeIcon.className = 'fa-solid fa-moon text-lg';
    }
});

// --- 2. Mobile Menu Toggle ---
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    if (mobileMenu.classList.contains('hidden')) {
        menuIcon.className = 'fa-solid fa-bars text-xl';
    } else {
        menuIcon.className = 'fa-solid fa-xmark text-xl';
    }
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.className = 'fa-solid fa-bars text-xl';
    });
});

// --- 3. Dynamic Subtitle Role Switcher ---
const roles = [
    'UI/UX Designer',
    'Creative Tech Enthusiast',
    'Open Source Contributor'
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleText = document.getElementById('roleText');

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        roleText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        roleText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
        speed = 2000; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
    }

    setTimeout(typeRole, speed);
}

window.onload = function() {
    typeRole();
};

// --- 4. Interactive Project Filter ---
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active styling from all buttons
        filterBtns.forEach(b => {
            b.classList.remove('active', 'bg-gradient-to-r', 'from-cyan-500', 'to-indigo-500', 'text-white', 'shadow-md');
            b.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
        });

        // Apply active styling to clicked button
        btn.classList.add('active', 'bg-gradient-to-r', 'from-cyan-500', 'to-indigo-500', 'text-white', 'shadow-md');
        btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// --- 5. Functional Contact Form Submission Simulation ---
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    formStatus.classList.remove('hidden', 'bg-rose-500/20', 'text-rose-500');
    formStatus.classList.add('bg-emerald-500/20', 'text-emerald-500');
    formStatus.textContent = 'Thank you! Your message has been sent successfully.';

    contactForm.reset();

    setTimeout(() => {
        formStatus.classList.add('hidden');
    }, 5000);
});