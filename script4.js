// Grab elements
const loginForm = document.getElementById('loginForm');
const guestBtn = document.getElementById('guestBtn');

//  user login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); 
  // Directly homepage
  window.location.href = "index4.html"; 
});
