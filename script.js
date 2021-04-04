// Assignment Code
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var lowerCase;
var upperCase;
var number;
var special;

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwords;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Length prompts
function Length() {
var passwordLength = parseInt(prompt("Please enter the desired password length of at least 8 characters and no more than 128 characters."));;
  
if (passwordLength<8){
    window.alert("Error: Pick a length with least 8 characters!");
    return;
  }else if (passwordLength>128){
    window.alert("Error: Pick a length less than 128 characters!");
    return;
  }else if (isNaN(passwordLength)){
    window.alert("Password length must be a number!");
    return;
  }
}

//lowercase prompt
function chooseLowerCase(){
  var lowerCase = prompt("Do you want lowercase characters in your password? (y or n)");

  if (lowerCase === "y"){
    lowerCase = true;
    return;
  }else if (lowerCase === "n"){
    lowerCase = false;
    return;
  }else if (lowerCase === ""){
    window.alert("Please choose y or n.");
    chooseLowerCase();
  }
}


function chooseUpperCase(){
  var upperCase = prompt("Do you want uppercase characters in your password? (y or n)");

  if (upperCase === "y"){
    lowerCase = true;
    return;
  }else if (upperCase === "n"){
    upperCase = false;
    return;
  }else if (upperCase === ""){
    window.alert("Please choose y or n.");
    chooseUpperCase();
  }
}

//number prompt
function chooseNumber(){
  number = prompt("Do you want to include numbers in your password? (y or n)");

    if (number === "y"){
      number = true;
      return;
    }else if (number === "n"){
      number = false;
      return;
    }else if (number = ""){
        alert("Please choose y or n.");
        chooseNumbers();
}

//special character prompt
function chooseSpecial(){
  special = prompt("Do you want to include special characters in your password? (y or n)");

    if (special === "y"){
      special = true;
      return;
    }else if (special === "n"){
      special = false;
      return;
   }else if (special = ""){
        alert("Please choose y or n.");
        chooseSpecial();
    }
  }}
  
  function generatePassword(){
  var characters = lowercaseChar;
  var password = "";
  
  if (uppercase&& number && special){
    characters += uppercaseChar + numberChar + specialChar;
  
  }else if (uppercase && number{
    characters += uppercaseChar + numberChar;
  
  }else if (number && special){
    characters += numberChar + specialChar;
  
  }else if (uppercase && special){
    characters += uppercaseChar + specialChar;
  
  }else if (uppercase){
    characters += uppercaseChar;
  
  }else if(number){
    characters += numberChar;
  
  }else if (special){
    characters += specialChar;
  
  }else{
    characters === lowercaseChar;
  }
  
    for(var i = 0; i < passwordLength; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }