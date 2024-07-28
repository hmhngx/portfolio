document.addEventListener('DOMContentLoaded', () => {
    const toggleMenu = () => {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        const isOpen = menu.classList.toggle("open");
        
        icon.classList.toggle("open");
        icon.setAttribute('aria-expanded', isOpen);
    };

    document.querySelector(".hamburger-icon").addEventListener("click", toggleMenu);
});

document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.querySelector('.btn-container .btn-color-1');
    const contactInfo = document.querySelector('.contact-info-toggle');

    contactButton.addEventListener('click', () => {
        contactInfo.style.display = contactInfo.style.display === 'none' ? 'block' : 'none';
    });
});