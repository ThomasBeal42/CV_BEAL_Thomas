const scrollUpButton = document.getElementById("scrollUp");
const toggleDarkMode = document.getElementById('darkModeToggle');
const githubButton = document.getElementById('githubButton');

// Scroll to top visibility control
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpButton.style.display = "flex";
    } else {
        scrollUpButton.style.display = "none";
    }
};

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dark mode toggle and GitHub button functionality
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

    githubButton.addEventListener('click', function() {
        window.open('https://github.com', '_blank', 'noopener,noreferrer');
    });
});

scrollUpButton.addEventListener('click', scrollToTop);

// Keyboard shortcuts for dark mode, GitHub, and scroll to top
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
