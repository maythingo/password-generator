// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//password prompts
var passwordLength = ("Please enter a password with at least 8 characters and no more than 128 characters.");
var lowerCase = ("Do you want lowercase characters in your password? ");
var UpperCase = ("Do you want uppercase characters in your password?");
var number = ("Do you want numbers in your password?");
var specialChar = ("Do you want special characters in your password?");