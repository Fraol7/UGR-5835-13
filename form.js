function validate() {
    var firstName = document.getElementById("first").value;
    var lastName = document.getElementById("last").value;
    var firstNameValid = validateName(firstName);
    var lastNameValid = validateName(lastName);
 
 
     if( document.myForm.first.value == "" ) {
        alert( "Please provide your FIRST name!" );
        document.myForm.first.focus() ;
        return false;
     }
     if( document.myForm.last.value == "" ) {
         alert( "Please provide your LAST name!" );
         document.myForm.last.focus() ;
         return false;
      }
      if (!firstNameValid) {
       alert("Invalid first name. Please enter only letters.");
       return false;
   }
 
   if (!lastNameValid) {
       alert("Invalid last name. Please enter only letters.");
       return false;
   }
     if( document.myForm.email.value == "" ) {
        alert( "Please provide your Email!" );
        document.myForm.email.focus() ;
        return false;
     }
     var emailID = document.myForm.email.value;
     atpos = emailID.indexOf("@");
     dotpos = emailID.lastIndexOf(".");
     
     if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email")
        document.myForm.email.focus() ;
        return false;
     }
     return( true );
 
 }
 function validateName(name) {
     var nameRegex = /^[a-zA-Z]+$/;
     return nameRegex.test(name);
 }