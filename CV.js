const scrollUpButton = document.getElementById("scrollUp");
const toggleDarkMode = document.getElementById('darkModeToggle');
const githubButton = document.getElementById('githubButton');

const observer = new IntersectionObserver(
    ([entry]) => {
        scrollUpButton.style.display = entry.isIntersecting ? 'none' : 'flex';
    },
    { threshold: 0.1 }
);
observer.observe(document.body);

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

scrollUpButton.addEventListener('click', scrollToTop);

toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

document.body.classList.toggle('dark-mode', localStorage.getItem('theme') === 'dark');

githubButton.addEventListener('click', () => {
    window.open('https://github.com', '_blank', 'noopener,noreferrer');
});

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});