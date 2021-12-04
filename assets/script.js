// Assignment Code
var generateBtn = document.querySelector("#generate");





  function generatePassword(){

    var tempList = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabetOnUpperCase = tempList.map((x) => String.fromCharCode(x));
    console.log(alphabetOnUpperCase);
  

   // Generate an array of lower case letters from a to z
    // const alpha2 = Array.from(Array(26)).map((e, i) => i + 97);
    var tempList = Array.from(Array(26)).map((e, i) => i + 97);
    const alphabetOnLowerCase = tempList.map((x) => String.fromCharCode(x));
    console.log(alphabetOnLowerCase);

   // Generate an array of numbers from 0 to 9 
    var tempList = Array.from(Array(10)).map((e, i) => i + 48);
    const numbers = tempList.map((x) => String.fromCharCode(x));
    console.log(numbers);

    // Generate the 1st portion of the set of special characters "!" to "/"
    // const special-1 = Array.from(Array(15)).map((e, i) => i + 33);
    var tempList = Array.from(Array(15)).map((e, i) => i + 33);
    const specialSetOne = tempList.map((x) => String.fromCharCode(x));
    console.log(specialSetOne);

    // Generate the 2nd portion of the set of special characters ":" to "@"
    var tempList = Array.from(Array(7)).map((e, i) => i + 58);
    const specialSetTwo = tempList.map((x) => String.fromCharCode(x));
    console.log(specialSetTwo);

    // Generate the 3rd portion of the set of special characters ":" to "@"
    var tempList = Array.from(Array(4)).map((e, i) => i + 93);
    const specialSetThree = tempList.map((x) => String.fromCharCode(x));
    // const specialSetThree = tempspecialSetThree.push("[");
    console.log(specialSetThree);

    // Generate the 4th portion of the set of special characters ":" to "@"
    var tempList = Array.from(Array(4)).map((e, i) => i + 123);
    const specialSetFour = tempList.map((x) => String.fromCharCode(x));
    console.log(specialSetFour);

    var tempList = specialSetOne.concat(specialSetTwo);
    var fullSpecialChar = specialSetThree.concat(specialSetFour);
    fullSpecialChar = fullSpecialChar.concat(tempList);
    console.log(fullSpecialChar);

    // Asks for the number of characters for the password and saves unto the variable
    var passwordLength = prompt("Enter length of desired password (8~128 chars):");

    // Get a random value from the array.
    function randomize (itemtoRandomize){
      return itemtoRandomize[Math.floor((Math.random(itemtoRandomize)* itemtoRandomize.length))]
    }

    if (passwordLength) {
      if ( passwordLength > 7 && passwordLength < 129 ){
        console.log(passwordLength);
        var includeUpperCase = window.confirm("Include UPPER case characters?");
          console.log(includeUpperCase);

          var password = [];
          
          if (includeUpperCase){
            
            var upperCaseChar = randomize(alphabetOnUpperCase);  // Choose random upper case letter from the array.
            console.log("This is the random upper case character:  " + upperCaseChar);
            passwordLength--;
            console.log(passwordLength);
            password = password.push(upperCaseChar);
            console.log("This is the current password: " + password);
          }

        var includeLowerCase = window.confirm("Include LOWER case characters?");
          console.log(includeLowerCase);
          if (includeLowerCase){
            var lowerCaseChar = randomize(alphabetOnLowerCase);  // Choose random lower case letter from the array.
            console.log("This is the lower case character: " + lowerCaseChar);
            passwordLength--;
            console.log(passwordLength);
            password = password.push(lowerCaseChar);
          }

        var includeNumbers = window.confirm("Include NUMERIC characters?");
          console.log(includeNumbers);
          if (includeNumbers){
            var numbersChar = randomize(numbers)
            console.log("This is the number character: " + numbersChar);
            passwordLength--;
            password = password.push(numbersChar);
          }
        var includeSpecialChar = window.confirm("Include SPECIAL characters?");
          console.log(includeSpecialChar);  
          if (includeSpecialChar) {
            var specialChar =  randomize(fullSpecialChar);
            console.log("This is the random special character: " + specialChar);
            passwordLength--;
            console.log(passwordLength);
            password = password.push(specialChar);
          }

        for (passwordLength; passwordLength > 0; passwordLength--){
          password = password.push(randomize(fullSpecialChar));
          console.log(password);
        }
        return password;
      }
      else {
        console.log("Input is outside scope of allowable values.");
        window.alert("The input does not comply with password length requirement or is an invalid input.");
        
      }

            // console.log("This button is working");
            return 1;
    }

  }


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
