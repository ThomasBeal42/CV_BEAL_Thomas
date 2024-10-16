const scrollUpButton = document.getElementById("scrollUp");
const toggleDarkMode = document.getElementById('darkModeToggle');
const githubButton = document.getElementById('githubButton');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        scrollUpButton.style.display = entry.isIntersecting ? 'none' : 'block';
    });
}, observerOptions);

observer.observe(document.querySelector('header'));

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const toggleDarkModeFunc = () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    toggleDarkMode.setAttribute('aria-pressed', isDarkMode);
};

const openGitHub = () => {
    window.open('https://github.com', '_blank', 'noopener,noreferrer');
};

scrollUpButton.addEventListener('click', scrollToTop);
toggleDarkMode.addEventListener('click', toggleDarkModeFunc);
githubButton.addEventListener('click', openGitHub);

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleDarkMode.setAttribute('aria-pressed', 'true');
    }
});

// Gestion des raccourcis clavier
document.addEventListener('keydown', (e) => {
    if (e.altKey) {
        switch(e.key) {
            case 't':
                toggleDarkModeFunc();
                break;
            case 'g':
                openGitHub();
                break;
            case 'h':
                scrollToTop();
                break;
        }
    }
});