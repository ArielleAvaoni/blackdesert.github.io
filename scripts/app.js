document.getElementById("loginForm").addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Redirect the user to the desired page
  window.location.href = "Index.html";
});

function redirectToLogin() {
  window.location.href = "login.html";
}

function redirectToRegister() {
  window.location.href = "register.html";
}
function openPopup(applicationType) {
    var popup = document.getElementById(applicationType);
    popup.style.display = "block";
    
    var button = document.getElementById(applicationType + 'Button');
    button.style.display = "none";
    button.display = "none";
  }
  
  function closePopup(applicationType) {
    var popup = document.getElementById(applicationType);
    popup.style.display = "none";
  }