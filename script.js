// script.js
const heading = document.querySelector('.animated-heading');
const profilePicture = document.querySelector('.animated-profile-picture');
const fadeInDelay = 500; // Adjust the slide-in delay (in milliseconds)

// Function to apply the slide-in effect on the heading and profile picture
function slideInElements() {
    heading.style.opacity = '1';
    heading.style.transform = 'translateY(0)';
    profilePicture.style.opacity = '1';
    profilePicture.style.transform = 'translateY(0)';
}

// Trigger the slide-in effect after a specified delay
setTimeout(slideInElements, fadeInDelay);
const navToggle = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});