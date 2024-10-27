const scrollUpButton = document.getElementById("scrollUp");
const toggleDarkMode = document.getElementById('darkModeToggle');
const githubButton = document.getElementById('githubButton');

// Contrôle de la visibilité du bouton pour remonter
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpButton.style.display = "flex";
    } else {
        scrollUpButton.style.display = "none";
    }
};

// Fonction de défilement vers le haut avec animation
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fonctionnalités de mode sombre et bouton GitHub
document.addEventListener("DOMContentLoaded", function() {
    toggleDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme)) {
        document.body.classList.add('dark-mode');
    }

    // Désactivation du bouton GitHub sur les appareils mobiles
    if (window.innerWidth > 768) {
        githubButton.addEventListener('click', function() {
            window.open('https://github.com', '_blank', 'noopener,noreferrer');
        });
    }
});

// Activation du bouton de retour en haut
scrollUpButton.addEventListener('click', scrollToTop);

// Raccourcis clavier pour la navigation rapide
document.addEventListener('keydown', (e) => {
    if (e.altKey) {
        switch(e.key) {
            case 't':
                document.body.classList.toggle('dark-mode');
                localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
                break;
            case 'g':
                window.open('https://github.com', '_blank', 'noopener,noreferrer');
                break;
            case 'h':
                scrollToTop();
                break;
        }
    }
});
