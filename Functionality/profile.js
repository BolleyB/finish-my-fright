// Get the edit form and edit profile button
var editForm = document.getElementById("editForm");
var editProfileBtn = document.getElementById("editProfileBtn");

// Add event listener to the edit profile button
editProfileBtn.addEventListener("click", function () {
  // Show the edit form
  editForm.style.display = "block";
  // Hide the edit profile button
  editProfileBtn.style.display = "none";
});

// Prevent form submission (for demonstration)
document
  .getElementById("profileEditForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Here you can handle form submission, such as sending data to the server
    // For now, we'll just hide the edit form after submission
    editForm.style.display = "none";
    // Show the edit profile button again
    editProfileBtn.style.display = "block";
  });
