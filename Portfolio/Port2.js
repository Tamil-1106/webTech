document.addEventListener('DOMContentLoaded', () => {
    
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navBar = document.querySelector('.navbar');

        
    const toggleMenu = () => {
        
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    };

  
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', toggleMenu);
    }

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
        
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});