
function showLogin() {
    document.getElementById("loginForm").classList.add("active");
}
// Grab elements
const loginForm = document.getElementById('loginForm');

// When user clicks login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); 
  // Directly go to homepage
  window.location.href = "index4.html"; 
});

