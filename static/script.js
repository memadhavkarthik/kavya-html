// script.js

// Toggle navbar on small screens
function toggleNavbar() {
    const navbarLinks = document.getElementById('navbar-links');
    navbarLinks.classList.toggle('show');
}

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close the navbar after clicking a link
        if (window.innerWidth <= 768) {
            toggleNavbar();
        }
    });
});