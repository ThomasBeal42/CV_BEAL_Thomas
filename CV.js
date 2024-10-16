window.onscroll = function() {
  const scrollUpButton = document.getElementById("scrollUp");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollUpButton.style.display = "flex";
  } else {
    scrollUpButton.style.display = "none";
  }
};

// Scroll to Top Function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
  const toggleDarkMode = document.getElementById('darkModeToggle');
  const githubButton = document.getElementById('githubButton');

  // Dark Mode Toggle
  if (toggleDarkMode) {
    toggleDarkMode.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      
      // Save user's preference in local storage
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });

    // Apply the saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }

  // GitHub Button Functionality
  if (githubButton) {
    githubButton.addEventListener('click', function() {
      window.location.href = 'https://github.com';
    });
  }
});
