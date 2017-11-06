// On load
$(document).ready(function () {

  // whenever the user tries to submit the form
  $("#mainForm").on("submit", function() {
    // assume the form is valid, unless we find an invalid field
    formValid = true;
    // check if the first name is empty
    firstNameIsValid = $("#firstName").prop("validity").valid;
    // if the first name field is valid (has text in it),
    if(firstNameIsValid) {
     // hide the error
     $("#fnameError").hide();
    } else { // (otherwise, if the first name field is empty)
     // show the error
     $("#fnameError").show();
     // and don’t let the user submit the form
     formValid = false;
    }
    // Validation for other fields here
    // if the form is valid, let the user submit it; otherwise, block submission
    return formValid;
  });

});
