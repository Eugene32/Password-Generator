// Assignment Code
var generateBtn = document.querySelector("#generate");





  function generatePassword(){

    // Creat an array of capital letters from A to Z
    var tempList = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabetOnUpperCase = tempList.map((x) => String.fromCharCode(x));

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

    // Combine all special characters to make the FULL LIST of SPECIAL CHARACTERS
    var tempList = specialSetOne.concat(specialSetTwo);
    var fullSpecialChar = specialSetThree.concat(specialSetFour);
    fullSpecialChar = fullSpecialChar.concat(tempList);
    console.log(fullSpecialChar);

    var fullCharSet = [];     //Declare a container for all the character sets that the user will select.

    // Asks for the number of characters for the password and saves unto the variable
    var passwordLength = prompt("Enter length of desired password (8~128 chars):");

    // Get a random value from the array.
    function randomize (itemtoRandomize){
      return itemtoRandomize[Math.floor((Math.random(itemtoRandomize)* itemtoRandomize.length))]
    }

    if (passwordLength) {
      if ( passwordLength > 7 && passwordLength < 129 ){
        console.log(passwordLength);

        // Prompts user if upper case of alphabets are to be included.
        var includeUpperCase = window.confirm("Include UPPER case characters?");
        console.log(includeUpperCase);

        var password = "";                                                                        // Declare password as the password container
        console.log("The current password is:  " + password);

        // To be executed if the user confirms usage of upper case alphabets.
        if (includeUpperCase){
          
          fullCharSet = fullCharSet.concat(alphabetOnUpperCase);
          console.log("The current fullCharset is:  " + fullCharSet);
          console.log(fullCharSet.length);

          console.log(alphabetOnUpperCase);
          var upperCaseChar = randomize(alphabetOnUpperCase);                                     // Choose random upper case letter from the array.
          console.log("This is the random upper case character:  " + upperCaseChar);
          passwordLength--;
          console.log(passwordLength);
          password = password.concat(upperCaseChar);
          console.log("This is the current password: " + password);
        }

        // Prompts user if lower case of alphabets are to be included.
        var includeLowerCase = window.confirm("Include LOWER case characters?");
        console.log(includeLowerCase);

        // To be executed if the user confirms LOWER CASE criteria.
        if (includeLowerCase){

          fullCharSet = fullCharSet.concat(alphabetOnLowerCase);
           
          var lowerCaseChar = randomize(alphabetOnLowerCase);                                     // Choose random lower case letter from the array.
          console.log("This is the lower case character: " + lowerCaseChar);
          passwordLength--;
          console.log(passwordLength);
          password = password.concat(lowerCaseChar);
          console.log("This is the current password: " + password);
          }

        // Prompts user if NUMBBERS are to be included.
        var includeNumbers = window.confirm("Include NUMERIC characters?");
        console.log(includeNumbers);

        if (includeNumbers){

          fullCharSet = fullCharSet.concat(numbers);
            
          var numbersChar = randomize(numbers)
          console.log("This is the number character: " + numbersChar);
          passwordLength--;
          password = password.concat(numbersChar);
          console.log("This is the current password: " + password);
        }

        // Prompts user if SPECIAL CHARACTERS are to be included.  
        var includeSpecialChar = window.confirm("Include SPECIAL characters?");
        console.log(includeSpecialChar);  

        if (includeSpecialChar) {
       
          fullCharSet = fullCharSet.concat(fullSpecialChar);

          var specialChar =  randomize(fullSpecialChar);
          console.log("This is the random special character: " + specialChar);
          passwordLength--;
          console.log(passwordLength);
          password = password.concat(specialChar);
          console.log("This is the current password: " + password);
        }

        
        console.log("This is the full set of characters to be used for the password:  " + fullCharSet);
        console.log(fullCharSet.length);

        if (fullCharSet.length > 0){
          // Generate to whole set of the password based on criteria    
          for (passwordLength; passwordLength > 0; passwordLength--){
            password = password.concat(randomize(fullCharSet));
            console.log("This is the current password: " + password);
          }

          // Converts a string to an array 
          password = password.split('');

          // Rearrange the array randomnly
          console.log("After spliting: " + password);

          for (n = password.length -1; n > 0 ; n--) {
            j = Math.floor(Math.random() * n)
            tempList = password[n];
            password[n] = password[j];
            password[j] = tempList;
          }  

          // Converts the array back to string.
          password = password.join('');
          return password;
        }

        else {
          // Alert user of non-selection of criteria.
          window.alert("You had not chosen any character set.  No password can be generated");
          return password = "You had not chosen any character set.  No password can be generated";

        }        
        
      }

      else {
        // When input does not meet password length requirement.
        console.log("Input is outside scope of allowable values.");
        window.alert("The input does not comply with password length requirement or is an invalid input.");
        return "No password generated."
        
      }
                     
    }
    // When initial input was not given
    if (!passwordLength){
      return password = "Password generation aborted!"
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
