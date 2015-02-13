// equivalent of $(document).ready(function(e){});
document.addEventListener("DOMContentLoaded",function(event) {
   document.querySelector("form").onsubmit = validateForm;
});

function validateForm() {
   var validName = isNotEmpty("name", "Name cannot be blank");
   var validEmail = isValidEmail("email", "Invalid email");
   var validMessage = isNotEmpty("message", "Message cannot be blank");
   var validSource = isChecked("source", "Please select a source");
   var validRating = isChecked("rating", "Please rate my webpage");
   return (validName && validEmail && validMessage && validSource && validRating);
}
function isNotEmpty(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim();
   var isValid = (inputValue.length !== 0);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
function isChecked(inputName, errorMsg) {
   var inputElements = document.getElementsByName(inputName);
   var errorElement = document.getElementById(inputName + "Error");
   var isChecked = false;
   for (var i = 0; i < inputElements.length; i++) {
      if (inputElements[i].checked) {
         isChecked = true;  // found one element checked
         break;
      }
   }
   showMessage(isChecked, null, errorMsg, errorElement);
   return isChecked;
}
function showMessage(isValid, inputElement, errorMsg, errorElement) {
   if (!isValid) {
      if (errorElement !== null) {
         errorElement.innerHTML = errorMsg;
      } else {
         alert(errorMsg);
      }
      if (inputElement !== null) {
         inputElement.focus();
      }
   } else {
      if (errorElement !== null) {
         errorElement.innerHTML = "";
      }
      if (inputElement !== null) {
         inputElement.className = "";
      }
   }
}
function isValidEmail(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value;
   var atPos = inputValue.indexOf("@");
   var dotPos = inputValue.lastIndexOf(".");
   var isValid = (atPos > 0) && (dotPos > atPos + 1) && (inputValue.length > dotPos + 2);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}