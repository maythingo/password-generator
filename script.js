// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//password prompts
function createPassword() {
var passwordLength = prompt("Please enter the desired password length of at least 8 characters and no more than 128 characters.");
  if (passwordLength<8 || passwordLength >129 || passwordLength === ""){
    alert("Error: You do not have at least 8 characters or no more than 128 characters!");
    return passwordLength;
  }
var lowerCase = confirm("Do you want lowercase characters in your password? ");
var upperCase = confirm("Do you want uppercase characters in your password?");
var number = confirm("Do you want numbers in your password?");
var specialChar = confirm("Do you want special characters in your password?");
}

