const scrollUpButton = document.getElementById("scrollUp");
const toggleDarkMode = document.getElementById('darkModeToggle');
const githubButton = document.getElementById('githubButton');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpButton.style.display = "flex";
    } else {
        scrollUpButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
    toggleDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    githubButton.addEventListener('click', function() {
        window.open('https://github.com', '_blank', 'noopener,noreferrer');
    });
});

scrollUpButton.addEventListener('click', scrollToTop);

// Gestion des raccourcis clavier
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