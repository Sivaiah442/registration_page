function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    if (password !== confirmPassword) {
      document.getElementById("errorMessage").style.display = "block";
      return false; // Prevent form submission
    }
  
    // If passwords match, proceed with form submission
    return true;
  }
  