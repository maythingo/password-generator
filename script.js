// Assignment Code
var onlyUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var onlyLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var onlySpecial = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var onlyNumeric = [0,1,2,3,4,5,6,7,8,9];

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
var passwordLength = parseInt(prompt("Please enter the desired password length of at least 8 characters and no more than 128 characters."));;
  if (passwordLength<8){
    window.alert("Error: Pick a length with least 8 characters!");
    return;
  }
  else if (passwordLength>128){
    window.alert("Error: Pick a length less than 128 characters!");
    return;
  }

var lowerCase = confirm("Do you want lowercase characters in your password? ");
var upperCase = confirm("Do you want uppercase characters in your password?");
var number = confirm("Do you want numbers in your password?");
var specialChar = confirm("Do you want special characters in your password?");
}

