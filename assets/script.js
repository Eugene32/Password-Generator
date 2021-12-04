// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate an array of upper case letters from A to Z

const alpha1 = Array.from(Array(26)).map((e, i) => i + 65);
const alphabetOnUpperCase = alpha1.map((x) => String.fromCharCode(x));
console.log(alphabetOnUpperCase);

// Generate an array of lower case letters from a to z
const alpha2 = Array.from(Array(26)).map((e, i) => i + 97);
const alphabetOnLowerCase = alpha2.map((x) => String.fromCharCode(x));
console.log(alphabetOnLowerCase);

const numeric = Array.from(Array(10)).map((e, i) => i + 48);
const numbers = numeric.map((x) => String.fromCharCode(x));
console.log(numbers);



function generatePassword(){
  console.log("This button is working");
  return 1;

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
