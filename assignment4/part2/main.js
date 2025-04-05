/*
    Name: David Oyeyemi
    Student Number: 100987382
    Date: Apr 4th, 2025
    Description: This is to make interaction with a gallery website.
*/


const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const altTexts = {
    "pic1.jpg" : "Closeup of a human eye",
    "pic2.jpg" : "Rock that looks like a wave",
    "pic3.jpg" : "Purple and white pansies",
    "pic4.jpg" : "Section of wall from a pharaoh\'s tomb",
    "pic5.jpg" : "Large moth on a leaf"
  };

/* Looping through images */
images.forEach(image => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', altTexts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', `images/${image}`);
        displayedImage.setAttribute('alt', altTexts[image]);
    });
})



/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const currentClass = btn.getAttribute('class');
    if (currentClass === 'dark') {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
});