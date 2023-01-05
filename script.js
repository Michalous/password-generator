// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// array of possible options for a future reference
var chooseFromOptions = [specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters]

// Function to prompt user for password options
function getPasswordOptions() {
  var dropdown = document.getElementById('length').value
  var array = []
  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].name)
  }
  return [array, dropdown]
}

// Helper function that returns an array of all possible characters depending on users input
function arrayOfSymbols() {
  var passwordOptions = getPasswordOptions()
  var passwordString = []
  for (var i = 0; i < passwordOptions[0].length; i++) {
    for (var j = 0; j < chooseFromOptions[passwordOptions[0][i]].length; j++) {
      if (passwordOptions[0][i] == 1) {
        // if numeric is chosen it is added to passwordString array twice
        // - so there's a similar probability of being chosen as other ones (10 numeric vs 20+ other ones)
        passwordString.push(chooseFromOptions[passwordOptions[0][i]][j])
        passwordString.push(chooseFromOptions[passwordOptions[0][i]][j])
      }
      else {
        passwordString.push(chooseFromOptions[passwordOptions[0][i]][j])
      }
    }
  }
  
  return passwordString
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Function to generate password with user input
function generatePassword() {
  var array = arrayOfSymbols()
  passwordLength = getPasswordOptions()[1]
  var result = ""
  for (var i = 0; i < passwordLength; i++) {
    result += getRandom(array)
  }
  return result
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', function() {
  // First checks if at least one option was chosen
  if (getPasswordOptions()[0].length == 0) {
    document.getElementById('error').innerHTML = "* Error! You have to tick one of the options"
  }
  // Second checks if the length selected is between 10 and 64 inclusive
  else if (getPasswordOptions()[1] < 10 || getPasswordOptions()[1] > 64) {
    document.getElementById('error2').innerHTML = "* Error! Has to be between 10 and 64"
  }
  // if both above are correct then clears all error messages and writes password
  else {
    document.getElementById('error').innerHTML = ""
    document.getElementById('error2').innerHTML = ""
    writePassword()
  }
})
