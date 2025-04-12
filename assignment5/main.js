/*
  Name: David Oyeyemi
  Student Number: 100987382
  Date: Apr 4th, 2025
  Description: This code is to let interaction with a bear article site.
*/

// Get the Show/Hide button by its new class or ID
const toggleButtons = document.querySelectorAll('.show-hide');

// Loop through each button and add event listeners
toggleButtons.forEach(button => {
  button.addEventListener('click', function () {
    const article = document.querySelector('.comment-wrapper');
    
    // Toggle visibility of the comments section
    if (article.style.display === "none" || article.style.display === "") {
      article.style.display = "block"; // Show the comments
      button.setAttribute('aria-expanded', 'true'); // Set expanded state for accessibility
      button.textContent = 'Hide comments'; // Update button text
    } else {
      article.style.display = "none"; // Hide the comments
      button.setAttribute('aria-expanded', 'false'); // Set collapsed state for accessibility
      button.textContent = 'Show comments'; // Update button text
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