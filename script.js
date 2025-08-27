// =============================
// AVRX TECH INTERACTIONS
// =============================

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu');
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        const nav = document.querySelector('header nav');
        if (!nav) return;

        if (getComputedStyle(nav).display === 'none') {
            nav.style.display = 'block';
            menuBtn.textContent = '✕';
        } else {
            nav.style.display = 'none';
            menuBtn.textContent = '☰';
        }
    });
}

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const targetId = link.getAttribute('href').slice(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Set Current Year in Footer
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
