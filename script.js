// Toggle between light and dark mode
const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    const isDarkMode = document.documentElement.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
};

// Load saved preference on page load
const loadDarkModePreference = () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.documentElement.classList.add('dark-mode');
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadDarkModePreference);

// Add button to toggle mode
const modeButton = document.createElement('button');
modeButton.textContent = '🌙 Dark Mode';
modeButton.addEventListener('click', () => {
    toggleDarkMode();
    modeButton.textContent = document.documentElement.classList.contains('dark-mode') 
        ? '☀️ Light Mode' 
        : '🌙 Dark Mode';
});
document.body.appendChild(modeButton);