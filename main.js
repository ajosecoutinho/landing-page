// main.js
window.addEventListener('scroll', function() {
    var socialElement = document.querySelector('.social');
    var h1Element = document.querySelector('h1');
    var h2Element = document.querySelector('h2');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      socialElement.classList.add('reduced-opacity');
      h1Element.classList.add('reduced-opacity');
      h2Element.classList.add('reduced-opacity');
    } else {
      socialElement.classList.remove('reduced-opacity');
      h1Element.classList.remove('reduced-opacity');
      h2Element.classList.remove('reduced-opacity');
    }
  });
  // Define an array of leading natural essences
var naturalEssences = [
  'Rose',
  'Citrus',
  'Rock Rose',
  'Pine Tree',
  'Jasmine',
  'Lavender',
  'Verbena',
  'Violet',
  'Bergamot',
  'Mint'
];

// Get the form and list elements
var form = document.getElementById('fragrance-form');
var fragranceList = document.getElementById('fragrance-list');

// Create a hidden email list
var emailList = document.createElement('ul');
emailList.style.display = 'none';

// Add the hidden email list to the body
document.body.appendChild(emailList);

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the value from the input field
  var fragranceNameInput = document.getElementById('fragrance-input');
  var fragranceName = fragranceNameInput.value;

  // Get the value from the email input field
  var emailInput = document.getElementById('email-input');
  var email = emailInput.value;

  // Validate the email address
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Create a new list item and add fragrance name
  var newItem = document.createElement('li');
  newItem.textContent = fragranceName;

  // Assign a random color to the new list item
  newItem.style.color = getRandomColor();

  // Assign a random natural essence to the new list item
  var randomEssence = naturalEssences[Math.floor(Math.random() * naturalEssences.length)];
  newItem.textContent += ' (' + randomEssence + ')';

  // Check if there are already 4 list items
  var listItems = fragranceList.getElementsByTagName('li');
  if (listItems.length >= 4) {
    fragranceList.removeChild(listItems[0]); // Remove the oldest item
  }

  // Append the new list item to the fragrance list
  fragranceList.appendChild(newItem);
  fragranceList.appendChild(document.createElement('br'));

  // Create a new list item and add email
  var newEmailItem = document.createElement('li');
  newEmailItem.textContent = email;

  // Append the new email item to the hidden email list
  emailList.appendChild(newEmailItem);
  emailList.appendChild(document.createElement('br'));

  // Reset the input field values
  fragranceNameInput.value = '';
  emailInput.value = '';
});

// Function to generate a random color in hexadecimal format
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to validate email address
function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// Access the hidden email list
var hiddenEmailList = document.getElementById('email-list');

// Access the email items in the hidden email list
var emailItems = hiddenEmailList.getElementsByTagName('li');

// Iterate over the email items and retrieve their text content
for (var i = 0; i < emailItems.length; i++) {
  var email = emailItems[i].textContent;
  console.log(email); // Or perform any desired operations with the email
}
