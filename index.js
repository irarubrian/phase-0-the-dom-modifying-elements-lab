// Write your code here!

// Select the <main> element by its ID and remove it
const main = document.querySelector('#main');
if (main) {
  main.remove();  // Removes the <main> element if it exists
}
// Create the new <h1> element
const newHeader = document.createElement('h1');

// Assign an id of 'victory' to the new <h1> element
newHeader.id = 'victory';

// Set the inner text with your name and the required text
newHeader.innerText = 'Your-Name is the champion';  // Replace 'Your-Name' with your actual name

// Append the new header to the body of the document
document.body.appendChild(newHeader);
// Make newHeader globally accessible for tests
window.newHeader = newHeader;
 //new variable that point  hi
 
 newHeader.textContent = "Brian Iraru is the champion";
