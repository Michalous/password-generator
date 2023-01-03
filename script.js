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


function arrayOfSymbols() {
  var passwordOptions = getPasswordOptions()
  if (passwordOptions[0].length == 0) {
  }
  else {
    var passwordString = []
    for (var i = 0; i < passwordOptions[0].length; i++) {
      for (var j = 0; j < chooseFromOptions[passwordOptions[0][i]].length; j++) {
        if (passwordOptions[0][i] == 1) {
          passwordString.push(chooseFromOptions[passwordOptions[0][i]][j])
          passwordString.push(chooseFromOptions[passwordOptions[0][i]][j])
        }
        else {
        passwordString.push(chooseFromOptions[passwordOptions[0][i]][j])
        }
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
//generateBtn.addEventListener('click', writePassword);
generateBtn.addEventListener('click', function() {
  if (getPasswordOptions()[0].length == 0) {
    document.getElementById('error').innerHTML = "* Error! You have to tick one of the options"
  }
  else {
    document.getElementById('error').innerHTML = ""
    writePassword()
  }
})
