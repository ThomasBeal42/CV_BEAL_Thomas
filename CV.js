const toggleDarkMode = document.getElementById('darkModeToggle');
const githubButton = document.getElementById('githubButton');
const scrollUpButton = document.getElementById("scrollUp");

// Mode sombre
document.addEventListener("DOMContentLoaded", () => {
    toggleDarkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    if (window.innerWidth > 768) {
        githubButton.addEventListener('click', () => {
            window.open('https://github.com', '_blank', 'noopener,noreferrer');
        });
    }
});

// Scroll vers le haut
scrollUpButton.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
