// Check if the user's theme preference is already set
const userThemePreference = localStorage.getItem('theme');

// If the preference is set, apply the theme
if (userThemePreference === 'dark') {
  document.body.classList.add('dark-theme');
}

// Get the theme toggle button element
const themeToggle = document.getElementById('theme-toggle');

// Event listener for the theme toggle button
themeToggle.addEventListener('click', () => {
  // Toggle the dark theme class on the body element
  document.body.classList.toggle('dark-theme');

  // Save the user's theme preference to Local Storage
  const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});
