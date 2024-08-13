// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const nav = document.querySelector('nav');

    // Toggle dark mode by toggling CSS classes
    body.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode-nav');
}

// Function to automatically set light or dark mode based on the time of day
function autoSetMode() {
    const now = new Date();
    const hour = now.getHours();

    // Set dark mode if it's night time (after 6 PM and before 6 AM)
    if (hour >= 18 || hour < 6) {
        document.body.classList.add('dark-mode');
        document.querySelector('nav').classList.add('dark-mode-nav');
    }
}

// Get the card content elements
const clockElement = document.getElementById('clock');
const dateElement = document.getElementById('date');
const dayElement = document.getElementById('day');

// Function to update the clock, date, and day
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const date = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear();

    // Update the clock, date, and day content
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = `${date}/${month}/${year}`;
    dayElement.textContent = `${day}`;
}

// Call the updateClock function every second to keep the time up to date
setInterval(updateClock, 1000);

// Call the updateClock function initially to set the initial time
updateClock();

// Automatically set light or dark mode based on the time of day
autoSetMode();

