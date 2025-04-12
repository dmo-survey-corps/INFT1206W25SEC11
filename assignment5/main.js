/*
  Name: David Oyeyemi
  Student Number: 100987382
  Date: Apr 4th, 2025
  Description: This code is to let interaction with a bear article site.
*/

// Get all buttons that toggle visibility
const toggleButtons = document.querySelectorAll('.toggle');

// Loop through each button and add event listeners
toggleButtons.forEach(button => {
  button.addEventListener('click', function () {
    const article = document.querySelector(`#${button.getAttribute('data-target')}`);
    
    // Toggle visibility of the target article
    if (article.style.display === "none" || article.style.display === "") {
      article.style.display = "block"; // Show the article
      button.setAttribute('aria-expanded', 'true'); // Set expanded state for accessibility
    } else {
      article.style.display = "none"; // Hide the article
      button.setAttribute('aria-expanded', 'false'); // Set collapsed state for accessibility
    }
  });

  // Allow keyboard navigation by handling Enter and Space keys
  button.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Prevent default action of spacebar scrolling
      button.click(); // Trigger the click event to toggle visibility
    }
  });
});
