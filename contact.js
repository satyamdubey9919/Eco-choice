<<<<<<< HEAD
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function(e){
  e.preventDefault(); // Prevent page reload

  // Show success message
  successMessage.style.display = "block";

  // Reset form fields
  contactForm.reset();

  // Hide message after 3 seconds
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);
});
=======
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function(e){
  e.preventDefault(); // Prevent page reload

  // Show success message
  successMessage.style.display = "block";

  // Reset form fields
  contactForm.reset();

  // Hide message after 3 seconds
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);
});
>>>>>>> 0f9667c048ecc0ad60a1b7c88c6f6d910a90f50f
