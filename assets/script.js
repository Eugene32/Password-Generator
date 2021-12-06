// Assignment Code
var generateBtn = document.querySelector("#generate");

  function generatePassword(){

    // Creat an array of capital letters from A to Z
    var tempList = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabetOnUpperCase = tempList.map((x) => String.fromCharCode(x));

    // Generate an array of lower case letters from a to z
    var tempList = Array.from(Array(26)).map((e, i) => i + 97);
    const alphabetOnLowerCase = tempList.map((x) => String.fromCharCode(x));
    
    // Generate an array of numbers from 0 to 9 
    var tempList = Array.from(Array(10)).map((e, i) => i + 48);
    const numbers = tempList.map((x) => String.fromCharCode(x));
    
    // Generate the 1st portion of the set of special characters "!" to "/"
    var tempList = Array.from(Array(15)).map((e, i) => i + 33);
    const specialSetOne = tempList.map((x) => String.fromCharCode(x));
    
    // Generate the 2nd portion of the set of special characters ":" to "@"
    var tempList = Array.from(Array(7)).map((e, i) => i + 58);
    const specialSetTwo = tempList.map((x) => String.fromCharCode(x));
    
    // Generate the 3rd portion of the set of special characters ":" to "@"
    var tempList = Array.from(Array(4)).map((e, i) => i + 93);
    const specialSetThree = tempList.map((x) => String.fromCharCode(x));
    
    // Generate the 4th portion of the set of special characters ":" to "@"
    var tempList = Array.from(Array(4)).map((e, i) => i + 123);
    const specialSetFour = tempList.map((x) => String.fromCharCode(x));
    
    // Combine all special characters to make the FULL LIST of SPECIAL CHARACTERS
    var tempList = specialSetOne.concat(specialSetTwo);
    var fullSpecialChar = specialSetThree.concat(specialSetFour);
    fullSpecialChar = fullSpecialChar.concat(tempList);
    
    var fullCharSet = [];     //Declare a container for all the character sets that the user will select.

    // Asks for the number of characters for the password and saves unto the variable
    var passwordLength = prompt("Enter length of desired password (8~128 chars):");

    // Get a random value from the array.
    function randomize (itemtoRandomize){
      return itemtoRandomize[Math.floor((Math.random(itemtoRandomize)* itemtoRandomize.length))]
    }

    if (passwordLength) {
      if ( passwordLength > 7 && passwordLength < 129 ){
        
        // Prompts user if upper case of alphabets are to be included.
        var includeUpperCase = window.confirm("Include UPPER case characters?");
        
        var password = "";                                                                        // Declare password as the password container
        
        // To be executed if the user confirms usage of upper case alphabets.
        if (includeUpperCase){
          
          fullCharSet = fullCharSet.concat(alphabetOnUpperCase);      
          var upperCaseChar = randomize(alphabetOnUpperCase);                                     // Choose random upper case letter from the array.        
          passwordLength--;      
          password = password.concat(upperCaseChar);
        }

        // Prompts user if lower case of alphabets are to be included.
        var includeLowerCase = window.confirm("Include LOWER case characters?");
      
        // Add lower case alphabets to the password selection set.
        if (includeLowerCase){
          fullCharSet = fullCharSet.concat(alphabetOnLowerCase);          
          var lowerCaseChar = randomize(alphabetOnLowerCase);                                     // Choose random lower case letter from the array.  
          passwordLength--;
          password = password.concat(lowerCaseChar);
          }

        // Prompts user if NUMBERS are to be included.
        var includeNumbers = window.confirm("Include NUMERIC characters?");

        // Add numbers to the password selection set.
        if (includeNumbers){
          fullCharSet = fullCharSet.concat(numbers);                                              // Choose random number letter from the array.
          var numbersChar = randomize(numbers)
          passwordLength--;
          password = password.concat(numbersChar);
        }

        // Prompts user if SPECIAL CHARACTERS are to be included.  
        var includeSpecialChar = window.confirm("Include SPECIAL characters?");

        // Add SPECIAL CHAR set to the password selection set.
        if (includeSpecialChar) {       
          fullCharSet = fullCharSet.concat(fullSpecialChar);
          var specialChar =  randomize(fullSpecialChar);                                          // Choose random SPECIAL CHAR from the array.
          passwordLength--;
          password = password.concat(specialChar);
        }
     

        if (fullCharSet.length > 0){
          // Generate to whole set of the password based on criteria    
          for (passwordLength; passwordLength > 0; passwordLength--){
            password = password.concat(randomize(fullCharSet));
          }

          // Converts a string to an array 
          password = password.split('');

          // Rearrange the array randomnly
          for (var n = password.length -1; n > 0 ; n--) {
            pointer = Math.floor(Math.random() * n)
            tempList = password[n];                                                           // Recycle the variable for this use.
            password[n] = password[pointer];
            password[pointer] = tempList;
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
